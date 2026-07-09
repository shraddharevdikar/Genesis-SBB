export interface AccountGrowthIndicator {
  readonly accountId: string;
  readonly accountName: string;
  readonly currentArrUSD: number;
  readonly potentialExpansionUSD: number;
  readonly productUsageHealthScore: number; // 0 to 100
  readonly netPromoterScore?: number;
  readonly expansionLikelihood: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface AccountGrowthSummary {
  readonly summaryId: string;
  readonly tenantId: string;
  readonly targetSegment: string;
  readonly averageAccountHealthScore: number;
  readonly totalPipelinePotentialUSD: number;
  readonly activeAccounts: AccountGrowthIndicator[];
  readonly lastAnalyzedAt: Date;
}
