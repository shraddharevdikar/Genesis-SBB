import { LearningPattern } from './learning-pattern.js';

export interface FailurePattern extends LearningPattern {
  readonly failureTriggers: string[];
  readonly earlyWarningSignals: string[];
  readonly mitigationsRecommended: string[];
  readonly businessImpactUSD: number;
}
