export interface ProfessionalAIAgentRecommendation {
  readonly recommendationId: string;
  readonly targetProjectIdString?: string;
  readonly targetConsultantIdString?: string;
  readonly recommendationCategoryCode: 'RESOURCE_SUBSTITUTION' | 'RISK_MITIGATION' | 'BILLING_RELEASE' | 'CHURN_AVOIDANCE';
  readonly proposedActionTitleString: string;
  readonly proposedActionRationaleText: string;
  readonly confidenceScoreDecimal: number; // e.g. 0.92
  readonly estimatedMarginImprovementPercentageDecimal?: number;
  readonly managerSignOffStaffRoleIdString?: string; // Human supervisor confirmation
  readonly executedFlag: boolean;
  readonly generatedAt: Date;
}

export interface ProfessionalServicesAIAgent {
  readonly agentId: string;
  readonly agentNameString: string;
  readonly activeCoreCapabilitiesList: string[]; // e.g. ["resource-optimization", "project-risk-prediction", "customer-health-tracking"]
  readonly totalRecommendationsGeneratedCount: number;
  readonly totalRecommendationsExecutedCount: number;
  readonly averageAcceptanceRateDecimal: number; // Human-in-the-loop performance metric
  readonly activeRecommendationsList: ProfessionalAIAgentRecommendation[];
  readonly lastModifiedAt: Date;
}
