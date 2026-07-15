import { ConversationId } from '../identity/conversation-id.js';

export interface CommunicationCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly conversationId: ConversationId;
  readonly durationMs: number;
  readonly finalStatusReason: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
