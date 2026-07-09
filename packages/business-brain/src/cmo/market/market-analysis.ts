export interface MarketSize {
  readonly tamUSD: number; // Total Addressable Market
  readonly samUSD: number; // Serviceable Addressable Market
  readonly somUSD: number; // Serviceable Obtainable Market
  readonly currency: string;
}

export interface MarketTrend {
  readonly trendId: string;
  readonly description: string;
  readonly impact: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
  readonly timeHorizon: 'SHORT_TERM' | 'MEDIUM_TERM' | 'LONG_TERM';
}

export interface MarketAnalysis {
  readonly analysisId: string;
  readonly tenantId: string;
  readonly marketName: string; // e.g., "AI-Powered Customer Support"
  readonly marketSize: MarketSize;
  readonly annualGrowthRatePercent: number; // e.g., 15.4 for 15.4%
  readonly trends: MarketTrend[];
  readonly maturityStage: 'EMERGING' | 'GROWTH' | 'MATURE' | 'DECLINING';
  readonly barriersToEntry: string[];
  readonly analyzedBy: string;
  readonly analyzedAt: Date;
}
