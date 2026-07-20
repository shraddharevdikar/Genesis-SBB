import { OpportunityLifecycleState } from '../core/sales-lifecycle.js';

export interface PipelineStage {
  readonly stageId: string;
  readonly stageState: OpportunityLifecycleState;
  readonly stageDisplayName: string; // e.g. "Proposal & Negotiation"
  readonly activeOpportunitiesCount: number;
  readonly aggregateStageValueAmount: number;
  readonly aggregateStageWeightedValueAmount: number;
  readonly historicalStageToWinConversionRateDecimal: number; // Conversion rate based on historical data
  readonly currencyCode: string;
}
