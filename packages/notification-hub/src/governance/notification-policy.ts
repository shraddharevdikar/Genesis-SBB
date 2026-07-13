export interface NotificationPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly maxNotificationsPerRecipientPerHour: number; // Prevent spamming
  readonly enforceStrictOptIn: boolean; // Legal compliance rules
  readonly retentionPeriodDays: number;
  readonly encryptionAtRestRequired: boolean;
  readonly maskSensitiveDataInAuditLogs: boolean;
}
