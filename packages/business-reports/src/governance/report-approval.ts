export type ReportApprovalWorkflowStatusCode =
  | 'PENDING_INDIVIDUAL_REVIEWS'
  | 'REJECTED_REVISION_REQUIRED'
  | 'APPROVED_PENDING_BOARD_SIG'
  | 'FULLY_APPROVED_RELEASED';

export interface ReportApprovalStep {
  readonly stepId: string;
  readonly reviewerOperatorRoleIdString: string;
  readonly isApprovedFlag: boolean;
  readonly reviewedAt?: Date;
  readonly rejectionCommentsText?: string;
}

export interface ReportApproval {
  readonly approvalId: string;
  readonly targetReportIdString: string;
  readonly workflowStatus: ReportApprovalWorkflowStatusCode;
  readonly reviewsList: ReportApprovalStep[];
  readonly lastModifiedAt: Date;
}
