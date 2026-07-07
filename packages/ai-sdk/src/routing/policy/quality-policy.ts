import { TaskComplexity } from '../capability/task-complexity.js';

export interface QualityPolicy {
  readonly minComplexitySupported: TaskComplexity;
  readonly preferExpertModels: boolean;
  readonly minSuccessRatePercent?: number;
  readonly evaluationMetric?: string;
}
