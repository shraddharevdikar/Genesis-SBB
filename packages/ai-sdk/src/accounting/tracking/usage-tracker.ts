import { TokenUsage } from '../tokens/token-usage.js';
import { CostRecord } from '../cost/cost-record.js';

export interface UsageTracker {
  trackUsage(record: Omit<CostRecord, 'recordId' | 'timestamp' | 'actualCost' | 'estimatedCost'>, usage: TokenUsage): Promise<CostRecord>;
}

export class DefaultUsageTracker implements UsageTracker {
  public async trackUsage(
    record: Omit<CostRecord, 'recordId' | 'timestamp' | 'actualCost' | 'estimatedCost'>,
    usage: TokenUsage
  ): Promise<CostRecord> {
    const cost = (usage.inputTokens * 0.000002) + (usage.outputTokens * 0.000006);
    return {
      ...record,
      recordId: Math.random().toString(36).substring(7),
      estimatedCost: cost,
      actualCost: cost,
      timestamp: new Date(),
    };
  }
}
