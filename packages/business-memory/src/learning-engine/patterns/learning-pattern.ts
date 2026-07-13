import { LearningDomain } from '../core/learning-profile.js';

export interface LearningPattern {
  readonly patternId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly description: string;
  readonly domains: LearningDomain[];
  readonly occurrencesCount: number;
  readonly firstObservedAt: Date;
  readonly lastObservedAt: Date;
  readonly confidenceScore: number; // 0 to 100
}
