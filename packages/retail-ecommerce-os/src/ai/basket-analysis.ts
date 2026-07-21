export interface ProductAffinityRule {
  readonly antecedentSkuCodeString: string; // "Bought Product A..."
  readonly consequentSkuCodeString: string; // "...also Bought Product B"
  readonly supportRatioDecimal: number; // probability of occurrence of A and B together
  readonly confidenceRatioDecimal: number; // probability of B given A
  readonly liftRatioDecimal: number; // ratio of confidence to baseline probability of B
}

export interface MarketBasketAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "BSK-ANL-2026-Q2"
  readonly scopeLocationIdString?: string; // empty if global omnichannel
  readonly analyzedTransactionsCount: number;
  readonly topAffinityRulesList: ProductAffinityRule[];
  readonly strategicMerchandisingNotes: string; // Recommendations on shelf placements or bundle discounts
  readonly calculatedAt: Date;
}
