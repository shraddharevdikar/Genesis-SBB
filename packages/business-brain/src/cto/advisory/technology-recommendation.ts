export interface TechnologyRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly proposedTechnology: string;
  readonly targetInfrastructure: string;
  readonly buildVsBuyChoice: 'BUILD' | 'BUY';
  readonly estimatedImplementationCostUSD: number;
  readonly estimatedAnnualSavingsUSD: number;
  readonly riskRating: 'LOW' | 'MEDIUM' | 'HIGH';
  readonly severityLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface ArchitectureRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly targetSystem: string;
  readonly modularityAdjustmentRequired: boolean;
  readonly estimatedRefactoringDays: number;
  readonly anticipatedDebtReductionUSD: number;
  readonly severityLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface SecurityRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly targetVulnerabilityCve?: string;
  readonly patchSteps: string[];
  readonly isBlockingRelease: boolean;
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface InnovationRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly emergingTechCandidateName: string;
  readonly implementationComplexity: 'LOW' | 'MEDIUM' | 'HIGH';
  readonly businessBenefitProjection: string;
  readonly actionPathway: 'PILOT' | 'ADOPT' | 'MONITOR';
}
