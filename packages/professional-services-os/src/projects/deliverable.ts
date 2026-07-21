export type DeliverableStatusCode = 'NOT_STARTED' | 'UNDER_DEVELOPMENT' | 'INTERNAL_QA_REVIEWS' | 'SUBMITTED_TO_CLIENT_REVIEW' | 'CLIENT_ACCEPTED' | 'REJECTED_REVISION_REQUIRED';

export interface Deliverable {
  readonly deliverableId: string;
  readonly uniqueDeliverableCode: string; // e.g. "DLV-CLOUD-ACME-01-ARCH-DOC"
  readonly associatedProjectIdString: string; // Links to Project
  readonly associatedMilestoneIdString?: string; // Sourced to milestone
  readonly deliverableTitleString: string;
  readonly detailedDescriptionText: string;
  readonly targetSubmissionDate: Date;
  readonly actualSubmissionDate?: Date;
  readonly clientApproverNameString?: string;
  readonly completionPercentageDecimal: number; // e.g. 1.0 for completed
  readonly artifactUrlString?: string; // Link to Docs/Drive (Workspace integration)
  readonly currentStatus: DeliverableStatusCode;
  readonly lastModifiedAt: Date;
}
