import { ConversationId } from '../identity/conversation-id.js';

export interface CommunicationMetrics {
  readonly metricsId: string;
  readonly tenantId: string;
  readonly conversationId: ConversationId;
  readonly averageMessageLatencyMs: number;
  readonly totalMessagesProcessedCount: number;
  readonly totalFailedMessagesCount: number;
  readonly totalRedactionsPerformedCount: number;
  readonly calculatedAt: Date;
}
