export interface PeopleKPI {
  readonly kpiId: string;
  readonly tenantId: string;
  readonly period: string; // e.g. "Q2-2026"
  readonly voluntaryAttritionRatePercent: number;
  readonly employeeNetPromoterScore: number; // eNPS, e.g. 45
  readonly highPerformerRetentionRatePercent: number;
  readonly internalPromotionRatePercent: number;
  readonly averageTenureMonths: number;
  readonly updatedBy: string;
  readonly updatedAt: Date;
}
