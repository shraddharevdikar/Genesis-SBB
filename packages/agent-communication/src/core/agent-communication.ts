import { AgentId } from '@sbb/agent-framework';
import { ConversationId } from '../identity/conversation-id.js';
import { CommunicationMessage } from '../messages/communication-message.js';
import { Participant } from '../participants/participant.js';
import { InteractionContext } from './interaction-context.js';
import { Conversation } from './conversation.js';

export interface AgentCommunication {
  /**
   * Commences a collaborative corporate interaction thread between digital employees and/or humans.
   */
  startConversation(
    tenantId: string,
    participants: Participant[],
    context: InteractionContext
  ): Promise<Conversation>;

  /**
   * Transmits a governed, structured enterprise communication packet to the targeted conversation stream.
   */
  sendMessage(
    tenantId: string,
    conversationId: ConversationId,
    message: CommunicationMessage,
    context: InteractionContext
  ): Promise<CommunicationMessage>;

  /**
   * Ingests, decrypts, and filters a incoming communication from the queue or channel.
   */
  receiveMessage(
    tenantId: string,
    conversationId: ConversationId,
    message: CommunicationMessage,
    context: InteractionContext
  ): Promise<CommunicationMessage>;

  /**
   * Dynamically evaluates participant profiles and routes the communication to teams, systems, or workflows.
   */
  routeCommunication(
    tenantId: string,
    conversationId: ConversationId,
    targetScopeCode: string,
    context: InteractionContext
  ): Promise<void>;

  /**
   * Escalates the conversation flow to senior executive managers or compliance review roles under SLA rules.
   */
  escalateConversation(
    tenantId: string,
    conversationId: ConversationId,
    escalationPathId: string,
    reason: string,
    context: InteractionContext
  ): Promise<Conversation>;

  /**
   * Concludes the conversation lifecycle, archiving traces, auditing context, and releasing lease holds.
   */
  completeConversation(
    tenantId: string,
    conversationId: ConversationId,
    context: InteractionContext
  ): Promise<void>;
}
