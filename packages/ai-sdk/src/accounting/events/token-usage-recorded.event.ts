import { TokenUsage } from '../tokens/token-usage.js';

export interface TokenUsageRecordedEvent {
  readonly eventType: 'token_usage.recorded';
  readonly timestamp: Date;
  readonly recordId: string;
  readonly tenantId: string;
  readonly userId: string;
  readonly provider: string;
  readonly model: string;
  readonly usage: TokenUsage;
  readonly estimatedCost: number;
}
