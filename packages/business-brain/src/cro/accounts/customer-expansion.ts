export interface ExpansionInitiative {
  readonly initiativeId: string;
  readonly title: string; // e.g. "Seat expansion drive" or "Enterprise Module Cross-sell"
  readonly description: string;
  readonly initiativeType: 'UPSELL' | 'CROSS_SELL' | 'ADD_ON_SERVICES';
  readonly targetedAccountsCount: number;
  readonly expectedArrUpliftUSD: number;
  readonly allocatedBudgetUSD: number;
  readonly conversionTargetPercent: number;
}

export interface CustomerExpansionPlan {
  readonly planId: string;
  readonly tenantId: string;
  readonly planName: string;
  readonly focusQuarter: string; // e.g. "Q4-2026"
  readonly initiatives: ExpansionInitiative[];
  readonly totalTargetExpansionArrUSD: number;
  readonly planStatus: 'DRAFT' | 'APPROVED' | 'ACTIVE' | 'ARCHIVED';
  readonly createdAt: Date;
}
