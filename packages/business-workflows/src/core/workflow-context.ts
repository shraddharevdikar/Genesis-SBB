import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly initiatorParticipantId: string;
  readonly activeWorkflowId?: WorkflowId;
  readonly timestamp: Date;
}
