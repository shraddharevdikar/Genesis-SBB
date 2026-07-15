import { ConversationId } from '../identity/conversation-id.js';

export interface CollaborationMetrics {
  readonly metricsId: string;
  readonly tenantId: string;
  readonly conversationId: ConversationId;
  readonly activeSlaResolutionTimeMs?: number;
  readonly humanInvolvementDurationMs: number;
  readonly totalHandoversBetweenParticipantsCount: number;
  readonly outcomeSentimentIndex: number; // 0.0 - 1.0 representing customer or team success satisfaction
  readonly calculatedAt: Date;
}
