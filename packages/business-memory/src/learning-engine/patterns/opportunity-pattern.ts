import { LearningPattern } from './learning-pattern.js';

export interface OpportunityPattern extends LearningPattern {
  readonly targetInefficiencySource: string;
  readonly marketTrendAlignment?: string;
  readonly estimatedValueUSD: number;
  readonly implementationComplexity: 'HIGH' | 'MEDIUM' | 'LOW';
}
