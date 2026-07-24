import { Injectable, Logger, Inject, Optional } from '@nestjs/common';
import { WorkflowInstanceRepository } from './repositories/workflow-instance.repository.js';
import { WorkflowRepository } from './repositories/workflow.repository.js';
import { RetryService } from './retry.service.js';
import { CompensationService } from './compensation.service.js';
import { ApprovalService } from './approval.service.js';
import { IWorkflowDefinition } from './interfaces/workflow.interface.js';
import { IWorkflowInstance } from './interfaces/workflow-instance.interface.js';
import { IWorkflowStep, IStepCondition } from './interfaces/workflow-step.interface.js';
import { IWorkflowContext } from './interfaces/workflow-context.interface.js';
import { IAIStepConfig, IAIStepExecutor } from './interfaces/ai-step.interface.js';
import { WORKFLOW_STATUS, STEP_STATUS, STEP_TYPE } from './constants/workflow.constants.js';
import { EventBusService } from '@sbb/event-bus';
import { AuditService } from '@sbb/audit';
import {
  WorkflowStartedEvent,
  StepStartedEvent,
  StepCompletedEvent,
  StepFailedEvent,
  WorkflowCompletedEvent,
} from './events/workflow.events.js';

export interface ICustomStepHandler {
  (step: IWorkflowStep, context: IWorkflowContext): Promise<Record<string, any>>;
}

@Injectable()
export class WorkflowExecutionService {
  private readonly logger = new Logger(WorkflowExecutionService.name);
  private customHandlers: Map<string, ICustomStepHandler> = new Map();
  private aiExecutor?: IAIStepExecutor;

  constructor(
    private readonly instanceRepo: WorkflowInstanceRepository,
    private readonly workflowRepo: WorkflowRepository,
    private readonly retryService: RetryService,
    private readonly compensationService: CompensationService,
    private readonly approvalService: ApprovalService,
    @Optional() @Inject(EventBusService) private readonly eventBus?: EventBusService,
    @Optional() @Inject(AuditService) private readonly auditService?: AuditService
  ) {}

  registerStepHandler(typeOrName: string, handler: ICustomStepHandler): void {
    this.customHandlers.set(typeOrName, handler);
  }

  registerAIExecutor(executor: IAIStepExecutor): void {
    this.aiExecutor = executor;
  }

  /**
   * Starts or resumes execution of a workflow instance.
   */
  async executeInstance(instanceId: string): Promise<IWorkflowInstance> {
    const instance = await this.instanceRepo.findInstanceById(instanceId);
    if (!instance) {
      throw new Error(`Instance ${instanceId} not found`);
    }

    const definition = await this.workflowRepo.findById(instance.definitionId);
    if (!definition) {
      throw new Error(`Workflow definition ${instance.definitionId} not found`);
    }

    if (instance.status === WORKFLOW_STATUS.COMPLETED || instance.status === WORKFLOW_STATUS.CANCELLED) {
      return instance;
    }

    const context: IWorkflowContext = {
      tenantId: instance.tenantId,
      organizationId: instance.organizationId,
      userId: instance.userId,
      variables: instance.context?.variables || {},
      stepResults: instance.context?.stepResults || {},
      input: instance.input,
    };

    let updatedInstance = await this.instanceRepo.updateInstance(instanceId, {
      status: WORKFLOW_STATUS.RUNNING,
      startedAt: instance.startedAt || new Date(),
    });

    if (this.eventBus && !instance.startedAt) {
      await this.eventBus.publish(
        new WorkflowStartedEvent({
          tenantId: instance.tenantId,
          organizationId: instance.organizationId,
          userId: instance.userId,
          payload: {
            instanceId: instance.id,
            definitionId: instance.definitionId,
            name: instance.name,
            version: instance.version,
            input: instance.input,
          },
        })
      );
    }

    if (this.auditService && !instance.startedAt) {
      await this.auditService.createAuditLog({
        actorId: instance.userId || 'system',
        entity: 'WORKFLOW_INSTANCE',
        entityId: instance.id,
        action: 'WORKFLOW_STARTED',
        tenantId: instance.tenantId || undefined,
        organizationId: instance.organizationId || undefined,
        userId: instance.userId || undefined,
        payload: { definitionId: instance.definitionId, name: instance.name },
      });
    }

    const steps: IWorkflowStep[] = definition.steps || [];
    const startIndex = instance.currentStepId
      ? steps.findIndex((s) => s.id === instance.currentStepId)
      : 0;

    for (let i = Math.max(0, startIndex); i < steps.length; i++) {
      const step = steps[i];

      // Check if instance was paused or cancelled mid-loop
      const currentInst = await this.instanceRepo.findInstanceById(instanceId);
      if (currentInst && (currentInst.status === WORKFLOW_STATUS.PAUSED || currentInst.status === WORKFLOW_STATUS.CANCELLED)) {
        return currentInst;
      }

      await this.instanceRepo.updateInstance(instanceId, { currentStepId: step.id });

      // Check conditions
      if (step.conditions && step.conditions.length > 0) {
        const met = step.conditions.every((cond) => this.evalCondition(cond, context));
        if (!met) {
          await this.instanceRepo.addExecutionLog({
            instanceId,
            stepId: step.id,
            event: 'StepSkipped',
            message: `Step ${step.name} (${step.id}) skipped due to condition mismatch`,
          });
          continue;
        }
      }

      const stepResult = await this.executeSingleStep(step, instance, definition, context);

      if (stepResult.status === STEP_STATUS.WAITING_APPROVAL) {
        await this.instanceRepo.updateInstance(instanceId, {
          status: WORKFLOW_STATUS.PENDING,
          currentStepId: step.id,
          context: { variables: context.variables, stepResults: context.stepResults },
        });
        return this.instanceRepo.findInstanceById(instanceId) as Promise<IWorkflowInstance>;
      }

      if (stepResult.status === STEP_STATUS.FAILED) {
        // Trigger compensation if defined
        if (definition.compensationStrategy) {
          await this.compensationService.compensateWorkflow(instanceId, steps, context);
        } else {
          await this.instanceRepo.updateInstance(instanceId, {
            status: WORKFLOW_STATUS.FAILED,
            errorMessage: stepResult.error || `Step ${step.name} failed`,
            completedAt: new Date(),
          });
        }
        return this.instanceRepo.findInstanceById(instanceId) as Promise<IWorkflowInstance>;
      }

      context.stepResults[step.id] = stepResult.output;
      if (stepResult.output && typeof stepResult.output === 'object') {
        Object.assign(context.variables, stepResult.output);
      }
    }

    // All steps executed successfully
    const finalInstance = await this.instanceRepo.updateInstance(instanceId, {
      status: WORKFLOW_STATUS.COMPLETED,
      output: context.stepResults,
      context: { variables: context.variables, stepResults: context.stepResults },
      completedAt: new Date(),
    });

    if (this.eventBus) {
      const durationMs = finalInstance.startedAt
        ? new Date().getTime() - new Date(finalInstance.startedAt).getTime()
        : 0;

      await this.eventBus.publish(
        new WorkflowCompletedEvent({
          tenantId: instance.tenantId,
          organizationId: instance.organizationId,
          userId: instance.userId,
          payload: {
            instanceId: instance.id,
            definitionId: instance.definitionId,
            output: context.stepResults,
            durationMs,
          },
        })
      );
    }

    return finalInstance;
  }

  /**
   * Executes a single step with retry policies, approvals, parallel loops, AI, and custom handlers.
   */
  private async executeSingleStep(
    step: IWorkflowStep,
    instance: IWorkflowInstance,
    definition: IWorkflowDefinition,
    context: IWorkflowContext
  ): Promise<{ status: string; output?: any; error?: string }> {
    const existingExec = await this.instanceRepo.findStepExecution(instance.id, step.id);
    if (existingExec && existingExec.status === STEP_STATUS.COMPLETED) {
      return { status: STEP_STATUS.COMPLETED, output: existingExec.output || { approved: true } };
    }

    const startTime = Date.now();

    let stepExecution = await this.instanceRepo.createStepExecution({
      instanceId: instance.id,
      stepId: step.id,
      stepName: step.name,
      stepType: step.type,
      status: STEP_STATUS.RUNNING,
      attempts: 1,
      maxAttempts: step.retryPolicy?.maxAttempts || 3,
      input: { stepConfig: step.config, contextVars: context.variables },
    });

    if (this.eventBus) {
      await this.eventBus.publish(
        new StepStartedEvent({
          tenantId: instance.tenantId,
          organizationId: instance.organizationId,
          userId: instance.userId,
          payload: {
            instanceId: instance.id,
            stepExecutionId: stepExecution.id,
            stepId: step.id,
            stepName: step.name,
            stepType: step.type,
          },
        })
      );
    }

    // Handle Approval step
    if (step.type === STEP_TYPE.APPROVAL) {
      const approverConfig = step.approvers || {
        approverType: 'USER',
        requiredApprovers: ['*'],
        approvalStrategy: 'SINGLE',
      };

      const existingApproval = await this.approvalService.createApprovalRequest(
        instance.id,
        step.id,
        approverConfig as any,
        instance.tenantId,
        instance.organizationId,
        stepExecution.id
      );

      await this.instanceRepo.updateStepExecution(stepExecution.id, {
        status: STEP_STATUS.WAITING_APPROVAL,
      });

      return { status: STEP_STATUS.WAITING_APPROVAL };
    }

    // Define step worker logic
    const stepWorker = async (attempt: number): Promise<any> => {
      // 1. Custom registered handler
      if (this.customHandlers.has(step.type) || this.customHandlers.has(step.id)) {
        const handler = this.customHandlers.get(step.id) || this.customHandlers.get(step.type);
        return handler!(step, context);
      }

      // 2. Parallel steps
      if (step.type === STEP_TYPE.PARALLEL && step.parallelStepIds) {
        const parallelSteps = definition.steps.filter((s) => step.parallelStepIds?.includes(s.id));
        const results = await Promise.all(
          parallelSteps.map((pStep) => this.executeSingleStep(pStep, instance, definition, context))
        );
        return results.map((r) => r.output);
      }

      // 3. AI step
      if (step.type === STEP_TYPE.AI) {
        if (this.aiExecutor) {
          const aiConfig: IAIStepConfig = {
            promptTemplate: step.config?.promptTemplate || `Process data: ${JSON.stringify(context.variables)}`,
            modelAlias: step.config?.modelAlias,
            parameters: step.config?.parameters,
          };
          return this.aiExecutor.executeAIStep(aiConfig, context);
        }
        return { aiResult: `Simulated AI output for step ${step.id}`, prompt: step.config?.promptTemplate };
      }

      // 4. Delay step
      if (step.type === STEP_TYPE.DELAY) {
        const delayMs = step.config?.delayMs || 1000;
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        return { delayedMs: delayMs };
      }

      // Default Task / Service execution
      return {
        executedStepId: step.id,
        stepName: step.name,
        timestamp: new Date().toISOString(),
        data: step.config || {},
      };
    };

    // Retry execution
    const retryPolicy = step.retryPolicy || { maxAttempts: 1, delayMs: 500 };
    const retryResult = await this.retryService.executeWithRetry(
      stepWorker,
      retryPolicy,
      async (attempt, error, delay) => {
        await this.instanceRepo.addExecutionLog({
          instanceId: instance.id,
          stepId: step.id,
          level: 'WARN',
          event: 'StepAttemptFailed',
          message: `Attempt ${attempt} for step ${step.name} failed: ${error.message}. Retrying in ${delay}ms`,
        });
      }
    );

    const durationMs = Date.now() - startTime;

    if (retryResult.success) {
      await this.instanceRepo.updateStepExecution(stepExecution.id, {
        status: STEP_STATUS.COMPLETED,
        attempts: retryResult.attempts,
        output: retryResult.result,
        completedAt: new Date(),
        durationMs,
      });

      if (this.eventBus) {
        await this.eventBus.publish(
          new StepCompletedEvent({
            tenantId: instance.tenantId,
            organizationId: instance.organizationId,
            userId: instance.userId,
            payload: {
              instanceId: instance.id,
              stepExecutionId: stepExecution.id,
              stepId: step.id,
              output: retryResult.result,
              durationMs,
            },
          })
        );
      }

      return { status: STEP_STATUS.COMPLETED, output: retryResult.result };
    } else {
      const errorMsg = retryResult.error?.message || 'Step execution failed';
      await this.instanceRepo.updateStepExecution(stepExecution.id, {
        status: STEP_STATUS.FAILED,
        attempts: retryResult.attempts,
        error: errorMsg,
        completedAt: new Date(),
        durationMs,
      });

      if (this.eventBus) {
        await this.eventBus.publish(
          new StepFailedEvent({
            tenantId: instance.tenantId,
            organizationId: instance.organizationId,
            userId: instance.userId,
            payload: {
              instanceId: instance.id,
              stepExecutionId: stepExecution.id,
              stepId: step.id,
              error: errorMsg,
              attempts: retryResult.attempts,
            },
          })
        );
      }

      return { status: STEP_STATUS.FAILED, error: errorMsg };
    }
  }

  /**
   * Evaluates a step condition against workflow context variables.
   */
  private evalCondition(cond: IStepCondition, context: IWorkflowContext): boolean {
    const val = context.variables[cond.field] ?? context[cond.field];

    switch (cond.operator) {
      case 'EQUALS':
        return val === cond.value;
      case 'NOT_EQUALS':
        return val !== cond.value;
      case 'GREATER_THAN':
        return Number(val) > Number(cond.value);
      case 'LESS_THAN':
        return Number(val) < Number(cond.value);
      case 'CONTAINS':
        return Array.isArray(val) ? val.includes(cond.value) : String(val).includes(String(cond.value));
      case 'IN':
        return Array.isArray(cond.value) ? cond.value.includes(val) : false;
      case 'EXISTS':
        return val !== undefined && val !== null;
      default:
        return true;
    }
  }
}
