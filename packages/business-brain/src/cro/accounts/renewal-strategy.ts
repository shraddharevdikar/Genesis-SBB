export interface AccountRenewalStatus {
  readonly accountId: string;
  readonly accountName: string;
  readonly contractRenewalDate: Date;
  readonly renewalArrUSD: number;
  readonly renewalProbabilityPercent: number; // 0 to 100
  readonly riskReasonCode?: 'STALLED_USAGE' | 'BUDGET_CUTS' | 'COMPETITOR_PRESSURE' | 'SUPPORT_SATISFACTION_LOW';
  readonly mitigationStepsTaken: string[];
}

export interface RenewalStrategy {
  readonly strategyId: string;
  readonly tenantId: string;
  readonly quarter: string; // e.g. "Q3-2026"
  readonly targetedRenewalRatePercent: number; // e.g. 95%
  readonly accountsToRenew: AccountRenewalStatus[];
  readonly totalRenewalPipelineUSD: number;
  readonly expectedRenewalArrUSD: number; // probability-weighted renewal
  readonly updatedAt: Date;
}
