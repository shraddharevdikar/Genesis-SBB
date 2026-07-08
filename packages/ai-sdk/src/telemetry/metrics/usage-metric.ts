import { AIMetric } from './ai-metric.js';

export interface UsageMetric extends AIMetric {
  readonly name: 'tokens_consumed' | 'cost_usd';
  readonly inputTokens?: number;
  readonly outputTokens?: number;
  readonly costUSD?: number;
}
