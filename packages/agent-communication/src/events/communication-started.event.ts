import { ConversationId } from '../identity/conversation-id.js';

export interface CommunicationStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly conversationId: ConversationId;
  readonly originChannelCode: string;
  readonly participantIdsList: string[];
  readonly traceId: string;
  readonly timestamp: Date;
}
