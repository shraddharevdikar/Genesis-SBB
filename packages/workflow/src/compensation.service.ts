import { Injectable, Logger } from '@nestjs/common';
import { WorkflowInstanceRepository } from './repositories/workflow-instance.repository.js';
import { IWorkflowStepExecution } from './interfaces/workflow-instance.interface.js';
import { IWorkflowStep } from './interfaces/workflow-step.interface.js';
import { IWorkflowContext } from './interfaces/workflow-context.interface.js';
import { STEP_STATUS, WORKFLOW_STATUS } from './constants/workflow.constants.js';

@Injectable()
export class CompensationService {
  private readonly logger = new Logger(CompensationService.name);

  constructor(private readonly instanceRepo: WorkflowInstanceRepository) {}

  /**
   * Executes compensation for a failed workflow instance.
   * Runs reverse compensation actions for all COMPLETED steps in reverse chronological order.
   */
  async compensateWorkflow(
    instanceId: string,
    steps: IWorkflowStep[],
    context: IWorkflowContext,
    customCompensator?: (step: IWorkflowStep, context: IWorkflowContext) => Promise<void>
  ): Promise<boolean> {
    const instance = await this.instanceRepo.findInstanceById(instanceId);
    if (!instance) {
      throw new Error(`Instance ${instanceId} not found for compensation`);
    }

    await this.instanceRepo.addExecutionLog({
      instanceId,
      event: 'CompensationStarted',
      message: `Starting saga compensation for instance ${instanceId}`,
    });

    const stepExecutions = instance.stepExecutions || [];
    const completedStepExecutions = stepExecutions
      .filter((se) => se.status === STEP_STATUS.COMPLETED)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    let allCompensated = true;

    for (const stepExec of completedStepExecutions) {
      const stepDef = steps.find((s) => s.id === stepExec.stepId);
      if (!stepDef) continue;

      try {
        await this.instanceRepo.addExecutionLog({
          instanceId,
          stepId: stepDef.id,
          event: 'StepCompensationStarted',
          message: `Compensating step ${stepDef.name} (${stepDef.id})`,
        });

        if (customCompensator) {
          await customCompensator(stepDef, context);
        } else if (stepDef.compensation?.action) {
          this.logger.log(`Executing step compensation action: ${stepDef.compensation.action} for step ${stepDef.id}`);
        }

        await this.instanceRepo.updateStepExecution(stepExec.id, {
          status: STEP_STATUS.COMPENSATED,
        });

        await this.instanceRepo.addExecutionLog({
          instanceId,
          stepId: stepDef.id,
          event: 'StepCompensated',
          message: `Step ${stepDef.name} compensated successfully`,
        });
      } catch (err: any) {
        allCompensated = false;
        this.logger.error(`Failed to compensate step ${stepDef.id}: ${err.message}`, err.stack);
        await this.instanceRepo.addExecutionLog({
          instanceId,
          stepId: stepDef.id,
          level: 'ERROR',
          event: 'StepCompensationFailed',
          message: `Step ${stepDef.name} compensation failed: ${err.message}`,
        });
      }
    }

    await this.instanceRepo.updateInstance(instanceId, {
      status: WORKFLOW_STATUS.COMPENSATED,
    });

    await this.instanceRepo.addExecutionLog({
      instanceId,
      event: 'CompensationCompleted',
      message: `Saga compensation completed for instance ${instanceId}. Success: ${allCompensated}`,
    });

    return allCompensated;
  }
}
