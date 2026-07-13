import { ApprovalId } from '../identity/approval-id.js';

export interface ApprovalSla {
  readonly slaId: string;
  readonly approvalId: ApprovalId;
  readonly tenantId: string;
  readonly targetResponseMinutes: number;
  readonly metSlaPercentage: number;
  readonly breachedCount: number;
  readonly alertEscalatedCount: number;
  readonly measuredAt: Date;
}
