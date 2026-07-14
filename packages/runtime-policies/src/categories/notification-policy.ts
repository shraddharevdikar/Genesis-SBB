import { PolicyId } from '../identity/policy-id.js';

export interface NotificationPolicy {
  readonly notificationPolicyId: string;
  readonly policyId: PolicyId;
  readonly maxVolumePerPeriod: number; // Prevent spamming
  readonly volumePeriodMinutes: number;
  readonly allowedChannels: Array<'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK'>;
  readonly quietHoursStart: string; // "HH:MM"
  readonly quietHoursEnd: string;   // "HH:MM"
  readonly bypassQuietHoursForCritical: boolean;
}
