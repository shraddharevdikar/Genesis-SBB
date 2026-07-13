export interface QuietHours {
  readonly quietHoursId: string;
  readonly tenantId: string;
  readonly recipientId: string; // The user, role, or team
  readonly isEnabled: boolean;
  readonly startHourLocal: number; // 0-23
  readonly startMinuteLocal: number; // 0-59
  readonly endHourLocal: number; // 0-23
  readonly endMinuteLocal: number; // 0-59
  readonly localTimezone: string; // Used to compute localized offset
  readonly actionOnDndMatch: 'DELAY_TO_QUIET_HOURS_END' | 'DROP' | 'ALLOW_IF_URGENT';
}
