export interface ExecutiveDecision {
  readonly decisionId: string;
  readonly uniqueDecisionCode: string; // e.g. "DEC-EXE-2026-0042"
  readonly decisionSubjectString: string; // e.g. "Approve M&A bid for Acme Corp"
  readonly associatedMeetingIdString?: string;
  readonly decidingExecutiveRoleIdsList: string[]; // Role IDs of executives who voted/signed off
  readonly votedInFavorCount: number;
  readonly votedAgainstCount: number;
  readonly decisionOutcome: 'APPROVED_PASSED' | 'REJECTED' | 'DEFERRED_FOR_REVISION';
  readonly resolutionDetailsText: string;
  readonly formalSignOffDocumentURI?: string;
  readonly decidedAt: Date;
}
