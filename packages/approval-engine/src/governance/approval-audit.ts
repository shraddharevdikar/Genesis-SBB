import { ApprovalInstanceId } from '../identity/approval-instance-id.js';

export interface ApprovalAudit {
  readonly auditId: string;
  readonly instanceId: ApprovalInstanceId;
  readonly tenantId: string;
  readonly stepId?: string;
  readonly actionPerfomed: 'REQUEST_CREATED' | 'DECISION_MADE' | 'DELEGATED' | 'ESCALATED' | 'REWORK_TRIGGERED' | 'COMPLETED' | 'REJECTED' | 'EXPIRED';
  readonly actedByRoleId: string;
  readonly details: string;
  readonly metadata?: Record<string, any>;
  readonly signatureHash?: string;
  readonly timestamp: Date;
}
