import { ConversationId } from '../identity/conversation-id.js';
import { MessageId } from '../identity/message-id.js';

export interface MessageSentEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly conversationId: ConversationId;
  readonly messageId: MessageId;
  readonly senderParticipantId: string;
  readonly intentCode: string;
  readonly priority: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
