import { ProductId } from '../products/product.js';

export interface PlannedRequirementItem {
  readonly requirementId: string;
  readonly targetProductId: ProductId;
  readonly planPeriodStartDate: Date;
  readonly planPeriodEndDate: Date;
  readonly forecastDemandQuantity: number;
  readonly safetyStockBufferQuantity: number;
  readonly netRequirementsQuantity: number;
}

export interface ProductionPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "PLN-GEN4-2026-Q3"
  readonly planTitleString: string;
  readonly strategicTimeHorizonMonthsCount: number; // e.g. 3 months
  readonly plannedRequirementsList: PlannedRequirementItem[];
  readonly approvedBudgetCapAmount: number;
  readonly currencyCode: string;
  readonly status: 'DRAFT' | 'APPROVED_LOCKED' | 'SUPERSEDED';
  readonly lastCalculatedAt: Date;
}
