export interface MarketingKPI {
  readonly kpiId: string;
  readonly tenantId: string;
  readonly period: string; // e.g. "Q3-2026", "July-2026"
  readonly marketingQualifiedLeadsCount: number; // MQLs
  readonly salesQualifiedLeadsCount: number;      // SQLs
  readonly opportunitiesGeneratedCount: number;
  readonly dealsClosedCount: number;
  readonly mqlToSqlConversionPercent: number;
  readonly sqlToOpportunityConversionPercent: number;
  readonly opportunityToCloseConversionPercent: number;
  readonly averageCostPerMQL: number;
  readonly averageCostPerSQL: number;
  readonly customerAcquisitionCostUSD: number;
  readonly updatedBy: string;
  readonly updatedAt: Date;
}
