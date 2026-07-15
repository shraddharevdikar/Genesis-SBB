import { ConversationId } from '../identity/conversation-id.js';
import { MessageId } from '../identity/message-id.js';

export interface MessageReceivedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly conversationId: ConversationId;
  readonly messageId: MessageId;
  readonly receiverParticipantId: string;
  readonly status: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
