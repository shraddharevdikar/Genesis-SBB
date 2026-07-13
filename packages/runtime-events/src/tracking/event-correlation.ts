import { CorrelationId } from '../identity/correlation-id.js';

export interface EventCorrelation {
  readonly correlationId: CorrelationId;
  readonly tenantId: string;
  readonly parentProcessInstanceId: string; // Traced root (e.g., Workflow instance id)
  readonly rootTriggerType: 'USER_ACTION' | 'API_GATEWAY' | 'SCHEDULED_TRIGGER' | 'EXTERNAL_WEBHOOK';
  readonly initiatedByRoleId: string;
  readonly spanCount: number;
  readonly startedAt: Date;
}
