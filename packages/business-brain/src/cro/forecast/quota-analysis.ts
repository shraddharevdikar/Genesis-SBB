export interface RepQuotaAttainment {
  readonly representativeId: string;
  readonly representativeName: string;
  readonly assignedQuotaUSD: number;
  readonly attainedRevenueUSD: number;
  readonly attainmentPercent: number; // e.g. 85.5%
  readonly salesRoleType: 'ACCOUNT_EXECUTIVE' | 'ENTERPRISE_AE' | 'SDR';
}

export interface QuotaAnalysis {
  readonly analysisId: string;
  readonly tenantId: string;
  readonly fiscalQuarter: string; // e.g. "Q3-2026"
  readonly totalAssignedQuotaUSD: number;
  readonly averageAttainmentPercent: number;
  readonly repsAtOrAboveQuotaCount: number;
  readonly repsBelowQuotaCount: number;
  readonly listRepAttainments: RepQuotaAttainment[];
  readonly analyzedAt: Date;
}
