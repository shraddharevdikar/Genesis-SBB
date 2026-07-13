import { NotificationId } from '../identity/notification-id.js';
import { TemplateId } from '../identity/template-id.js';

export interface NotificationDefinition {
  readonly notificationId: NotificationId;
  readonly tenantId: string;
  readonly name: string;
  readonly description?: string;
  readonly defaultTemplateId?: TemplateId;
  readonly defaultPriority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  readonly supportedChannels: Array<'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK'>;
  readonly version: string;
  readonly isActive: boolean;
  readonly createdByRoleId: string;
  readonly createdAt: Date;
}
