export interface ExternalReference {
  readonly externalSystemName: string; // e.g., "Salesforce", "Jira", "HubSpot"
  readonly externalRecordId: string;
  readonly externalRecordUrl?: string;
  readonly synchedAt: Date;
}
