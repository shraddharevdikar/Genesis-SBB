import { LearningPattern } from './learning-pattern.js';

export interface SuccessPattern extends LearningPattern {
  readonly primaryEnablingFactors: string[];
  readonly reproducibleSteps: string[];
  readonly typicalVitalsGainPercent: Record<string, number>;
}
