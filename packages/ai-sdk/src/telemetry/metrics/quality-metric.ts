import { AIMetric } from './ai-metric.js';

export interface QualityMetric extends AIMetric {
  readonly name: 'quality_score' | 'success_rate' | 'error_rate' | 'safety_blocks';
  readonly successRate?: number;
  readonly errorRate?: number;
  readonly safetyBlocksCount?: number;
  readonly errorMsg?: string;
}
