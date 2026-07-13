import { DecisionCategory } from '../core/decision-profile.js';

export interface DecisionPattern {
  readonly patternId: string;
  readonly name: string;
  readonly description: string;
  readonly applicableCategories: DecisionCategory[];
  readonly typicalSuccessFactors: string[];
  readonly typicalFailureFactors: string[];
  readonly usageFrequencyCount: number;
}
