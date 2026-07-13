import { ApprovalId } from '../identity/approval-id.js';

export interface ApprovalHealth {
  readonly healthId: string;
  readonly approvalId: ApprovalId;
  readonly tenantId: string;
  readonly activeRequestsCount: number;
  readonly failedOrStalledRequestsCount: number;
  readonly expiredRequestsCount: number;
  readonly lastCalculatedAt: Date;
}
