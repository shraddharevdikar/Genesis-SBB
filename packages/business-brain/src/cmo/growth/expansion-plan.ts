export interface ExpansionMilestone {
  readonly milestoneId: string;
  readonly description: string;
  readonly targetDate: Date;
  readonly status: 'PENDING' | 'ON_TRACK' | 'AT_RISK' | 'COMPLETED';
}

export interface ExpansionPlan {
  readonly planId: string;
  readonly tenantId: string;
  readonly targetRegionOrVertical: string; // e.g., "APAC", "Healthcare Vertical"
  readonly entryStrategyType: 'DIRECT_SALES' | 'PARTNERSHIPS' | 'ACQUISITION' | 'SELF_SERVE';
  readonly regulatoryRequirements: string[];
  readonly localizationRequired: boolean;
  readonly positioningAdjustments: string;
  readonly milestones: ExpansionMilestone[];
  readonly allocatedBudgetUSD: number;
  readonly planStatus: 'DRAFT' | 'APPROVED' | 'ACTIVE' | 'ON_HOLD';
  readonly lastReviewedAt: Date;
}
