import { ApprovalId } from '../identity/approval-id.js';

export interface ApprovalPerformance {
  readonly performanceId: string;
  readonly approvalId: ApprovalId;
  readonly tenantId: string;
  readonly avgApprovalTimeMinutes: number;
  readonly reworkPercentage: number;
  readonly bypassOrManualOverridesCount: number;
  readonly calculatedAt: Date;
}
