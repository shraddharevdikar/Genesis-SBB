export interface ReportSubscription {
  readonly subscriptionId: string;
  readonly uniqueSubscriptionCode: string; // e.g. "SUB-FIN-ANNUAL-CFO"
  readonly subscriberOperatorRoleIdString: string;
  readonly associatedReportTemplateIdString: string;
  readonly preferredLocaleCode: string; // e.g. "de-CH"
  readonly notificationFrequencyCode: 'IMMEDIATELY_ON_PUBLISH' | 'DAILY_SUMMARY' | 'WEEKLY_COMPILATION';
  readonly isSubscriptionActive: boolean;
  readonly createdAt: Date;
}
