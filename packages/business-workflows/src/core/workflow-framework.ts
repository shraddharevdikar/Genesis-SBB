import { WorkflowId } from '../identity/workflow-id.js';
import { WorkflowStepId } from '../identity/workflow-step-id.js';
import { WorkflowInstanceId } from '../identity/workflow-instance-id.js';
import { WorkflowContext } from './workflow-context.js';
import { BusinessWorkflow, WorkflowDomainCode } from '../workflows/business-workflow.js';
import { WorkflowStep } from '../workflows/workflow-step.js';
import { ExecutionState } from '../execution/execution-state.js';
import { WorkflowHealth } from '../monitoring/workflow-health.js';
import { ProcessId } from '@sbb/business-processes';

export interface WorkflowFramework {
  /**
   * Spawns a brand-new, version-controlled reusable business workflow template schema.
   */
  createWorkflow(
    associatedProcessId: ProcessId,
    uniqueWorkflowCode: string,
    domainCode: WorkflowDomainCode,
    displayName: string,
    descriptionText: string,
    context: WorkflowContext
  ): Promise<BusinessWorkflow>;

  /**
   * Appends or updates an atomic step (manual, cognitive or automated) within a specific stage.
   */
  defineWorkflowStep(
    workflowId: WorkflowId,
    stageId: string,
    step: WorkflowStep,
    context: WorkflowContext
  ): Promise<WorkflowStepId>;

  /**
   * Publishes the active workflow schema, incrementing version control and freezing modifications.
   */
  publishWorkflow(
    workflowId: WorkflowId,
    context: WorkflowContext
  ): Promise<void>;

  /**
   * Initiates a live execution instance thread for a published workflow schema.
   */
  executeWorkflow(
    workflowId: WorkflowId,
    initialVariablesPayloadJsonString: string,
    context: WorkflowContext
  ): Promise<WorkflowInstanceId>;

  /**
   * Audits success ratios, latency averages and error logs for an operational workflow schema.
   */
  monitorWorkflowHealth(
    workflowId: WorkflowId,
    context: WorkflowContext
  ): Promise<WorkflowHealth>;

  /**
   * Sunsets a workflow schema, transitioning lifecycle status to RETIRED.
   */
  retireWorkflow(
    workflowId: WorkflowId,
    context: WorkflowContext
  ): Promise<void>;
}
