import { ConversationId } from '../identity/conversation-id.js';
import { Participant } from '../participants/participant.js';
import { CommunicationMessage } from '../messages/communication-message.js';
import { BusinessArtifact } from '../attachments/business-artifact.js';

export interface Conversation {
  readonly conversationId: ConversationId;
  readonly tenantId: string;
  readonly participantsList: Participant[];
  readonly messagesList: CommunicationMessage[];
  readonly dynamicContextVariables: Record<string, string | number | boolean>;
  readonly referencedArtifactsList: BusinessArtifact[];
  readonly isEscalated: boolean;
  readonly createdAt: Date;
  readonly lastMessageAt?: Date;
}
