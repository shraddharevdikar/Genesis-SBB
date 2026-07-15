import { ConversationId } from '../identity/conversation-id.js';
import { MessageId } from '../identity/message-id.js';

export interface CommunicationAudit {
  readonly auditId: string;
  readonly tenantId: string;
  readonly conversationId: ConversationId;
  readonly loggedEventName: 'CONVERSATION_INITIATED' | 'MESSAGE_REDACTED' | 'MESSAGE_SENT' | 'ESCALATED' | 'COMPLETED';
  readonly triggeredMessageId?: MessageId;
  readonly complianceOfficerRoleId?: string;
  readonly commentsText?: string;
  readonly recordedAt: Date;
}
