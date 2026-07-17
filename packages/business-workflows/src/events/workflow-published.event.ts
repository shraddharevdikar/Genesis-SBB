import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowPublishedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly workflowId: WorkflowId;
  readonly uniqueWorkflowCode: string;
  readonly majorVersionNumber: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
