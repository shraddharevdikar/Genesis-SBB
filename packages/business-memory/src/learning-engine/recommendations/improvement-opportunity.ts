import { LearningRecommendation } from './learning-recommendation.js';

export interface ImprovementOpportunity extends LearningRecommendation {
  readonly currentInefficiencySummary: string;
  readonly expectedOptimizationPercent: number;
  readonly milestoneSteps: string[];
}
