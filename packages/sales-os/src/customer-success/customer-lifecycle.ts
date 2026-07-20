import { AccountId } from '../accounts/customer-account.js';

export type CustomerLifecycleStageCode =
  | 'ONBOARDING'
  | 'ACTIVE_ADOPTION'
  | 'ESTABLISHED_ADVOCACY'
  | 'RENEWAL_DECISION'
  | 'AT_RISK_HEALTH_DROP'
  | 'CHURNED';

export interface CustomerLifecycle {
  readonly lifecycleId: string;
  readonly parentAccountId: AccountId;
  readonly currentCSStage: CustomerLifecycleStageCode;
  readonly productAdoptionRateRatioDecimal: number; // e.g. 0.85 (85% licenses active)
  readonly customerNpsScoreValue?: number; // Net Promoter Score (0 to 10)
  readonly customerHealthScoreValue: number; // 0 to 100
  readonly primaryCustomerSuccessManagerOperatorRoleId: string;
  readonly lastHealthEvaluationDate: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
