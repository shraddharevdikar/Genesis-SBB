export type BillingMilestoneStatusCode = 'PENDING_DELIVERY' | 'DELIVERED_AWAITING_CLIENT_SIGN_OFF' | 'CLIENT_SIGNED_OFF' | 'INVOICED_COMPLETED' | 'CANCELLED';

export interface BillingMilestone {
  readonly billingMilestoneId: string;
  readonly uniqueBillingMilestoneCode: string; // e.g. "BMS-CLOUD-ACME-01-MS1"
  readonly associatedEngagementIdString: string; // Links to Engagement
  readonly milestoneTitleString: string;
  readonly milestoneDetailedCriteriaText: string;
  readonly milestoneValueAmount: number;
  readonly scheduledTargetDate: Date;
  readonly actualSignOffDate?: Date;
  readonly clientApproverSignatoryNameString?: string;
  readonly status: BillingMilestoneStatusCode;
  readonly generatedInvoiceRequestIdString?: string; // Links to InvoiceRequest
  readonly lastModifiedAt: Date;
}
