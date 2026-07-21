export type ProposalStatusCode = 'PREPARATION' | 'SUBMITTED_TO_CLIENT' | 'ACCEPTED' | 'REJECTED_WITHDRAWN';

export interface ProposalSection {
  readonly displayHeaderString: string;
  readonly detailedBodyText: string;
  readonly displaySequenceIndex: number;
}

export interface Proposal {
  readonly proposalId: string;
  readonly uniqueProposalCode: string; // e.g. "PRP-2026-CLOUD-ACME"
  readonly associatedClientIdString: string; // Links to Client
  readonly proposalTitleString: string;
  readonly targetPracticeAreaCode: string; // Practice Area delivering
  readonly narrativeIntroductionText: string;
  readonly keyProposedSectionsList: ProposalSection[];
  readonly totalEstimatedConsultingFeeAmount: number;
  readonly anticipatedDurationMonthsCount: number;
  readonly assignedSponsorStaffRoleIdString: string; // Sponsoring Partner (HROS)
  readonly proposalStatus: ProposalStatusCode;
  readonly submissionDeadlineDate: Date;
  readonly actualSubmittedTimestamp?: Date;
  readonly clientFeedbackNotesText?: string;
  readonly lastModifiedAt: Date;
}
