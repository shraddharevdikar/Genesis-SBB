import { AIMetric } from './ai-metric.js';

export interface LatencyMetric extends AIMetric {
  readonly name: 'latency_ms';
  readonly timeToFirstByteMs?: number;
  readonly totalDurationMs: number;
}

export interface RetryCountMetric extends AIMetric {
  readonly name: 'retry_count';
  readonly attempts: number;
}
