export interface AIStrategy {
  readonly strategyId: string;
  readonly coreFocus: string; // e.g., "Customer support automation", "Code completion"
  readonly deploymentType: 'SELF_HOSTED' | 'SAAS' | 'HYBRID';
  readonly securityApproved: boolean;
  readonly budgetUSD: number;
}

export interface CloudStrategy {
  readonly strategyId: string;
  readonly primaryProvider: 'AWS' | 'GCP' | 'AZURE' | 'HYBRID' | 'ON_PREMISE';
  readonly redundancyModel: string;
  readonly projectedAnnualCostUSD: number;
}

export interface PlatformModernization {
  readonly modernizationId: string;
  readonly targetSystemName: string;
  readonly replacementApproach: 'REFACTOR' | 'REPLATFORM' | 'REARCHITECT' | 'RETIRE';
  readonly currentDebtScore: number; // 0 to 100
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface BuildVsBuyAnalysis {
  readonly analysisId: string;
  readonly capabilityName: string;
  readonly buildOptionCostUSD: number;
  readonly buyOptionAnnualCostUSD: number;
  readonly recommendedPath: 'BUILD' | 'BUY';
  readonly strategicJustification: string;
}

export interface TechnologyStrategy {
  readonly strategyId: string;
  readonly tenantId: string;
  readonly digitalTransformationName: string;
  readonly cloudStrategy: CloudStrategy;
  readonly aiStrategy: AIStrategy;
  readonly platformModernizationPlans: PlatformModernization[];
  readonly buildVsBuyAssessments: BuildVsBuyAnalysis[];
  readonly alignmentScore: number; // 0 to 100
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
