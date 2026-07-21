export type SOWStatusCode = 'DRAFT' | 'INTERNAL_LEGAL_APPROVED' | 'SENT_CLIENT_REVIEW' | 'COMPLETED_SIGNED' | 'REJECTED_VOID';

export interface SOWMilestoneBillingTrigger {
  readonly milestoneLabelString: string;
  readonly anticipatedCompletionDate: Date;
  readonly billingPercentageDecimal: number; // e.g. 0.25 (25% on kickoff)
  readonly triggerAmount: number;
}

export interface StatementOfWork {
  readonly sowId: string;
  readonly uniqueSowCode: string; // e.g. "SOW-ACME-CLOUD-01"
  readonly associatedEngagementIdString: string; // Links to Engagement
  readonly associatedProposalIdString?: string; // Links to Proposal if sourced
  readonly sowTitleString: string;
  readonly coreDeliverablesSummaryText: string;
  readonly assumptionsAndExclusionsText: string;
  readonly milestoneBillingTriggersList: SOWMilestoneBillingTrigger[];
  readonly capFeeLimitAmount?: number; // Caps for fixed or T&M contracts
  readonly internalLegalSignOffSignatureString?: string; // Links to LegalOS budget control
  readonly clientRepresentativeSignatoryNameString?: string;
  readonly currentStatus: SOWStatusCode;
  readonly plannedStartDate: Date;
  readonly plannedEndDate: Date;
  readonly executionTimestamp?: Date;
  readonly lastModifiedAt: Date;
}
