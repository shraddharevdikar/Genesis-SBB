import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly workflowId: WorkflowId;
  readonly uniqueWorkflowCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
