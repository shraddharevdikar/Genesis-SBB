export interface OpportunityRisk {
  readonly riskId: string;
  readonly category: 'STALLED_STAGE' | 'NO_DECISION_MAKER' | 'COMPETITOR_INVOLVED' | 'BUDGET_MISSING' | 'NEGOTIATION_DELAY';
  readonly description: string;
  readonly severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface OpportunityDetails {
  readonly opportunityId: string;
  readonly accountId: string;
  readonly title: string;
  readonly expectedDealValueUSD: number;
  readonly closeProbabilityPercent: number; // 0 to 100
  readonly daysInStage: number;
  readonly healthScore: number; // 0 to 100
  readonly activeRisks: OpportunityRisk[];
  readonly competitorName?: string;
}

export interface OpportunityHealthReport {
  readonly reportId: string;
  readonly tenantId: string;
  readonly evaluatedAt: Date;
  readonly criticalRiskOpportunitiesCount: number;
  readonly highHealthOpportunitiesCount: number;
  readonly opportunities: OpportunityDetails[];
}
