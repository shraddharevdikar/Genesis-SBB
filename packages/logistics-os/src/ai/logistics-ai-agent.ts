export interface LogisticsAIAgentRecommendation {
  readonly recommendationId: string;
  readonly targetWarehouseIdString?: string;
  readonly targetSkuCodeString?: string;
  readonly recommendationCategoryCode: 'RE_ORDER_ALERT' | 'SLOTTING_OPTIMIZATION' | 'ROUTE_RERUN' | 'PREVENTATIVE_FLEET_SERVICE';
  readonly proposedActionTitleString: string;
  readonly proposedActionRationaleText: string;
  readonly confidenceScoreDecimal: number; // e.g. 0.94
  readonly anticipatedCostSavingAmountDecimal?: number;
  readonly operationalDecisionReleasedByStaffRoleIdString?: string; // Human operator signoff
  readonly executedFlag: boolean;
  readonly generatedAt: Date;
}

export interface LogisticsAIAgent {
  readonly agentId: string;
  readonly agentNameString: string;
  readonly activeCoreCapabilitiesList: string[]; // e.g. ["demand-forecasting", "route-optimization", "warehouse-layout"]
  readonly totalRecommendationsGeneratedCount: number;
  readonly totalRecommendationsExecutedCount: number;
  readonly averageAcceptanceRateDecimal: number; // Human-in-the-loop performance KPI
  readonly activeAgentRecommendationsList: LogisticsAIAgentRecommendation[];
  readonly lastModifiedAt: Date;
}
