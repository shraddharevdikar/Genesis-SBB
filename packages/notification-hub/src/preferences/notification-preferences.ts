export interface ChannelPreference {
  readonly channelType: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK';
  readonly isEnabled: boolean;
  readonly addressOverride?: string; // Specific address/handle override
}

export interface NotificationPreferences {
  readonly preferencesId: string;
  readonly tenantId: string;
  readonly recipientId: string; // The user or entity identity
  readonly categoryPreferences: Array<{
    readonly category: 'SYSTEM' | 'TRANSACTIONAL' | 'MARKETING' | 'ALERT';
    readonly optInStatus: 'OPT_IN' | 'OPT_OUT';
    readonly channels: ChannelPreference[];
  }>;
}
