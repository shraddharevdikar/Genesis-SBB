export enum ApprovalStatus {
  DRAFT = 'DRAFT',
  PENDING_REVIEW = 'PENDING_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  DEFERRED = 'DEFERRED'
}

export interface ApprovalModel {
  readonly approvalId: string;
  readonly status: ApprovalStatus;
  readonly totalRequiredSignatures: number;
  readonly gatheredSignaturesCount: number;
  readonly approvedAt?: Date;
  readonly expirationDate?: Date;
}
