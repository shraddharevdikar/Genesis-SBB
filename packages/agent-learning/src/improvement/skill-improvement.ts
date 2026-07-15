import { ImprovementRecommendation } from './improvement-recommendation.js';

export interface SkillImprovement extends ImprovementRecommendation {
  readonly targetType: 'SKILLS';
  readonly targetSkillUri: string; // The specific URI of the skill being tuned
  readonly parameterOverridesJson?: string; // Enhanced defaults, timeout adjustments, or precision parameters
  readonly suggestedRetryIntervalMs?: number;
}
