import { NotificationId } from '../identity/notification-id.js';
import { NotificationInstanceId } from '../identity/notification-instance-id.js';
import { NotificationDefinition } from './notification-definition.js';
import { NotificationInstance } from './notification-instance.js';
import { NotificationContext } from './notification-context.js';
import { Recipient } from '../audience/recipient.js';

export interface NotificationHub {
  /**
   * Defines and registers a new notification blueprint definition inside the SBB registry.
   */
  createNotification(
    tenantId: string,
    definition: Omit<NotificationDefinition, 'createdAt'>,
    createdByRoleId: string
  ): Promise<NotificationDefinition>;

  /**
   * Places a notification instance into the processing queue for delivery rendering and execution.
   */
  queueNotification(
    tenantId: string,
    notificationId: NotificationId,
    context: Omit<NotificationContext, 'instanceId' | 'initializedAt'>,
    recipient: Recipient,
    priorityOverride?: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'
  ): Promise<NotificationInstance>;

  /**
   * Evaluates if a notification is properly structured and satisfies system templates and properties constraints.
   */
  validateNotification(
    tenantId: string,
    notificationId: NotificationId,
    payloadVariables: Record<string, any>
  ): Promise<{ isValid: boolean; issues: string[] }>;

  /**
   * Resolves direct, dynamic or group recipients into an array of concrete notification-ready individual recipients.
   */
  resolveRecipients(
    tenantId: string,
    audienceRuleId: string,
    contextVariables: Record<string, any>
  ): Promise<Recipient[]>;

  /**
   * Matches delivery request channels against recipient preferences, opt-outs, and active quiet hours.
   */
  applyPreferences(
    tenantId: string,
    recipientId: string,
    requestedChannel: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK'
  ): Promise<{
    readonly isAllowed: boolean;
    readonly mappedChannel: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK';
    readonly quietHourDelayMinutes: number;
  }>;

  /**
   * Polls, captures, or asserts the terminal delivery status of a sent notification instance.
   */
  trackDelivery(
    tenantId: string,
    instanceId: NotificationInstanceId
  ): Promise<NotificationInstance>;
}
