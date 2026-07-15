import { AlertSeverity } from './alert-severity.js';

export interface EscalationNotification {
  readonly notificationId: string;
  readonly alertId: string;
  readonly tenantId: string;
  readonly severity: AlertSeverity;
  readonly triggeringMessageText: string;
  readonly targetRecipientRoleCode: string; // e.g. "SBB_SAFETY_OFFICER" or "SYSTEM_OPERATOR"
  readonly dispatchChannelCode: 'SLACK' | 'SMS' | 'EMAIL' | 'INTEGRATED_CONSOLE';
  readonly isAcknowledged: boolean;
  readonly acknowledgedByParticipantId?: string;
  readonly escalatedAt: Date;
}
