export type ApprovalWorkflowStatusCode =
  | 'PENDING_REVIEWS'
  | 'REJECTED_REVISION_REQUIRED'
  | 'APPROVED_RELEASED';

export interface ApprovalWorkflowStep {
  readonly stepId: string;
  readonly reviewerOperatorRoleIdString: string;
  readonly isApprovedFlag: boolean;
  readonly reviewedAt?: Date;
  readonly commentsNotesText?: string;
}

export interface AutomationApproval {
  readonly approvalId: string;
  readonly targetAutomationIdString: string;
  readonly workflowStatus: ApprovalWorkflowStatusCode;
  readonly stepsList: ApprovalWorkflowStep[];
  readonly lastModifiedAt: Date;
}
