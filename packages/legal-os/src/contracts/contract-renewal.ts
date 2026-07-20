import { ContractId } from './contract.js';

export interface ContractRenewal {
  readonly renewalId: string;
  readonly uniqueRenewalCode: string; // e.g. "RNW-MSA-SBB-2027"
  readonly associatedContractId: ContractId;
  readonly noticeDeadlineDate: Date; // date before which cancellation notice must be served
  readonly targetNewExpiryDate: Date;
  readonly autoRenewTermMonthsCount: number; // e.g. 12 months
  readonly adjustmentIndexRateDecimal?: number; // inflation adjustment rate e.g. 0.02
  readonly triggeredNotificationFlag: boolean;
  readonly status: 'PENDING_NOTICE' | 'NOTIFIED_UNDER_REVIEW' | 'RENEWED' | 'OPTED_OUT_LAPSED';
  readonly lastModifiedAt: Date;
}
