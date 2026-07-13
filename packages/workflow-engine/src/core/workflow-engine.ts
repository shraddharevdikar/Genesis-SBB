import { WorkflowId } from '../identity/workflow-id.js';
import { WorkflowInstanceId } from '../identity/workflow-instance-id.js';
import { WorkflowDefinition } from './workflow-definition.js';
import { WorkflowInstance } from './workflow-instance.js';
import { WorkflowContext } from './workflow-context.js';
import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface WorkflowEngine {
  /**
   * Registers a new workflow definition with its stages, steps, and transitions.
   */
  registerWorkflow(
    tenantId: string,
    definition: Omit<WorkflowDefinition, 'createdAt'>,
    initiatedByRoleId: string
  ): Promise<WorkflowDefinition>;

  /**
   * Validates if a workflow definition complies with structural, safety, and cycle check rules.
   */
  validateWorkflow(
    tenantId: string,
    definition: WorkflowDefinition
  ): Promise<{ isValid: boolean; issues: string[] }>;

  /**
   * Spawns an active tracking workflow instance.
   */
  createInstance(
    tenantId: string,
    workflowId: WorkflowId,
    initiatedByRoleId: string,
    variables: Record<string, any>
  ): Promise<{ instance: WorkflowInstance; context: WorkflowContext }>;

  /**
   * Triggers the evaluation of rules and transitions to move the workflow to the next step(s).
   */
  advanceWorkflow(
    tenantId: string,
    instanceId: WorkflowInstanceId,
    completedStepId: WorkflowStepId,
    variablesUpdate: Record<string, any>,
    actedByRoleId: string
  ): Promise<WorkflowInstance>;

  /**
   * Marks a workflow instance as successfully completed.
   */
  completeWorkflow(
    tenantId: string,
    instanceId: WorkflowInstanceId,
    finalPayload: Record<string, any>,
    actedByRoleId: string
  ): Promise<WorkflowInstance>;

  /**
   * Cancels a workflow instance, aborting any active steps and invoking compensations.
   */
  cancelWorkflow(
    tenantId: string,
    instanceId: WorkflowInstanceId,
    reason: string,
    actedByRoleId: string
  ): Promise<WorkflowInstance>;
}
