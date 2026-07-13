export interface Reviewer {
  readonly reviewerId: string;
  readonly roleId: string;
  readonly isFinalReviewer: boolean;
  readonly approvalRequired: boolean;
}
