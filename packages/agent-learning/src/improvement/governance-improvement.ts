import { ImprovementRecommendation } from './improvement-recommendation.js';

export interface GovernanceImprovement extends ImprovementRecommendation {
  readonly targetType: 'GOVERNANCE';
  readonly proposedAutonomyLevelReductionCode?: string; // Recommend reducing autonomy level on repeated violations
  readonly suggestedFinancialLimitChf?: number; // Tighten/ease Swiss Franc limits based on performance
  readonly policyCodeToTighten?: string;
}
