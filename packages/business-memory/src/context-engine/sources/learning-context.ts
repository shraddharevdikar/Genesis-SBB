import { LearningDomain } from '../../learning-engine/core/learning-profile.js';

export interface EngineLearningContext {
  readonly learningId: string;
  readonly domain: LearningDomain;
  readonly associatedPatternId?: string;
  readonly playbookExecutionCount: number;
}
