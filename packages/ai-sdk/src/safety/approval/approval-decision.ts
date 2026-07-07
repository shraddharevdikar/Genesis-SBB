export interface ApprovalDecision {
  readonly decisionId: string;
  readonly promptId?: string;
  readonly contentId?: string;
  readonly approved: boolean;
  readonly reviewerId: string;
  readonly comments?: string;
  readonly approvedAt: Date | string;
}
