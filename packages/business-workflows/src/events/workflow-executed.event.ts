import { WorkflowId } from '../identity/workflow-id.js';
import { WorkflowInstanceId } from '../identity/workflow-instance-id.js';

export interface WorkflowExecutedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly workflowId: WorkflowId;
  readonly instanceId: WorkflowInstanceId;
  readonly terminalStateCode: 'COMPLETED_SUCCESSFULLY' | 'FAILED_HALTED' | 'COMPENSATED_ABORTED';
  readonly traceId: string;
  readonly timestamp: Date;
}
