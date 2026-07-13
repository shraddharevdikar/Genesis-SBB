import { LearningRecommendation } from './learning-recommendation.js';

export interface BestPractice extends LearningRecommendation {
  readonly provenStandardProcess: string;
  readonly validationMetricName: string;
  readonly actualObservedSuccessDelta: string;
  readonly externalBenchmarkingRef?: string;
}
