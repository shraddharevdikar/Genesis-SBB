import { CommunicationId } from '../identity/communication-id.js';
import { ConversationId } from '../identity/conversation-id.js';

export type CommunicationSessionState = 'ESTABLISHED' | 'ACTIVE' | 'ON_HOLD' | 'COMPLETED' | 'TERMINATED';

export interface CommunicationSession {
  readonly sessionId: string;
  readonly communicationId: CommunicationId;
  readonly conversationId: ConversationId;
  readonly tenantId: string;
  readonly state: CommunicationSessionState;
  readonly lastInteractionAt: Date;
  readonly establishedAt: Date;
}
