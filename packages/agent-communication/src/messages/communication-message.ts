import { MessageId } from '../identity/message-id.js';
import { MessagePriority } from './message-priority.js';
import { MessageStatus } from './message-status.js';
import { AttachmentReference } from '../attachments/attachment-reference.js';

export interface CommunicationMessage {
  readonly messageId: MessageId;
  readonly senderParticipantId: string;
  readonly plainTextPayload: string;
  readonly rawEncryptedPayload?: string;
  readonly intentCode: string; // Map back to intents (e.g., "ASSIGNMENT")
  readonly priority: MessagePriority;
  readonly status: MessageStatus;
  readonly attachmentsList: AttachmentReference[];
  readonly sentAt: Date;
  readonly deliveredAt?: Date;
}
