export interface ApprovalDecision {
  readonly decisionId: string;
  readonly uniqueDecisionCode: string; // e.g. "DEC-APV-2026-9021"
  readonly associatedStageIdString: string;
  readonly decidingOperatorRoleIdString: string;
  readonly decisionOutcome: 'APPROVE' | 'REJECT_NEED_CORRECTION' | 'ABSTAIN';
  readonly feedbackNotesText?: string;
  readonly signatureChecksumHashText?: string;
  readonly decidedAt: Date;
}
