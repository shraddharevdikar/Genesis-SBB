export interface NotificationCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly notificationId: string;
  readonly name: string;
  readonly supportedChannels: Array<'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK'>;
  readonly createdByRoleId: string;
  readonly timestamp: Date;
}
