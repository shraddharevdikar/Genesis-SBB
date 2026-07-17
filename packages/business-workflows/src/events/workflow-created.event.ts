import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly workflowId: WorkflowId;
  readonly uniqueWorkflowCode: string;
  readonly domainCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
