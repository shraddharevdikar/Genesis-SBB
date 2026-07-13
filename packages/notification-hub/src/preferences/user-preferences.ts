import { NotificationPreferences } from './notification-preferences.js';

export interface UserPreferences {
  readonly userId: string;
  readonly tenantId: string;
  readonly globalPreferences: NotificationPreferences;
  readonly defaultTimezone: string; // Used to compute local quiet hours correctly
  readonly isDoNotDisturbActive: boolean;
  readonly dndExpiresAt?: Date;
}
