export interface Competitor {
  readonly competitorId: string;
  readonly name: string;
  readonly marketSharePercent: number; // e.g., 25.0
  readonly primaryStrengths: string[];
  readonly primaryWeaknesses: string[];
  readonly productGaps: string[];
  readonly pricingTier: 'BUDGET' | 'MID_MARKET' | 'PREMIUM' | 'ENTERPRISE';
}

export interface CompetitiveAnalysis {
  readonly analysisId: string;
  readonly tenantId: string;
  readonly targetProductCategory: string;
  readonly majorCompetitors: Competitor[];
  readonly ourDifferentiators: string[];
  readonly defenseStrategy: string; // e.g., "Deep integrations", "Cost efficiency"
  readonly competitiveThreatLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly updatedAt: Date;
}
