export interface CommunicationPreference {
  readonly preferenceId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly preferredChannel: 'EMAIL' | 'SLACK_CONNECT' | 'ZOOM_MEET' | 'IN_PERSON' | 'OTHER';
  readonly cadenceOfExecutiveReviews: 'WEEKLY' | 'BI_WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUALLY' | 'AD_HOC';
  readonly preferredContentFormats: string[]; // e.g., ["PDF Executive Summaries", "Slides"]
  readonly marketingOptIn: boolean;
  readonly specialHandlingNotes?: string;
}
