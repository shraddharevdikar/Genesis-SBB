export type ImpactCategoryCode =
  | 'REVENUE_MAXIMIZATION'
  | 'COST_SAVINGS_OPEX'
  | 'OPERATIONAL_EFFICIENCY'
  | 'RISK_MITIGATION'
  | 'COMPLIANCE_HARDENING'
  | 'AI_AGENT_OPTIMIZATION';

export interface RecommendationImpact {
  readonly impactCategory: ImpactCategoryCode;
  readonly expectedFinancialGainValue?: number; // e.g. estimated CHF savings
  readonly estimatedEfficiencyGainRatio?: number; // e.g. 0.12 for 12% faster
  readonly riskReductionIndex?: number; // 0-10 index
  readonly confidenceScoreRatio: number; // probability impact will materialize
}
