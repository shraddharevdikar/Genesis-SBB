import { SalesOpportunity } from '../opportunities/sales-opportunity.js';
import { PipelineStage } from './pipeline-stage.js';

export interface PipelineId {
  readonly value: string;
}

export interface SalesPipeline {
  readonly pipelineId: PipelineId;
  readonly uniquePipelineCode: string; // e.g., "PLN-EUROPE-SAAS"
  readonly displayName: string;
  readonly geographicRegionCode: string; // e.g., "EMEA"
  readonly targetFiscalQuarterString: string; // e.g., "2026-Q3"
  readonly assignedSalesOpportunitiesList: SalesOpportunity[];
  readonly pipelineStagesAggregateList: PipelineStage[];
  readonly totalPipelineValueAmount: number; // Aggregate unweighted value
  readonly totalWeightedPipelineValueAmount: number; // Aggregate (value * probability)
  readonly salesRepresentativeQuotaTargetAmount: number; // Sales Quota for the period
  readonly coverageRatioNumeric: number; // e.g. 3.2 (total value divided by target quota)
  readonly currencyCode: string; // e.g. "CHF"
  readonly ownerOperatorRoleId: string; // Region Head or VP Sales
  readonly lastCalculatedAt: Date;
}
