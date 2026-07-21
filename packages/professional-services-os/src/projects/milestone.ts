export type MilestoneStatusCode = 'NOT_REACHED' | 'IN_PROGRESS' | 'ACHIEVED' | 'MISSED_OVERDUE';

export interface Milestone {
  readonly milestoneId: string;
  readonly uniqueMilestoneCode: string; // e.g. "PRJ-CLOUD-ACME-01-MS-02"
  readonly associatedProjectIdString: string; // Links to Project
  readonly milestoneNameString: string;
  readonly targetAchievementDate: Date;
  readonly actualAchievementDate?: Date;
  readonly billingTriggerRequestedFlag: boolean; // Triggers InvoiceRequest
  readonly associatedBillingMilestoneIdString?: string; // Links to BillingMilestone
  readonly completionApprovedByClientSponsorFlag: boolean;
  readonly status: MilestoneStatusCode;
  readonly lastModifiedAt: Date;
}
