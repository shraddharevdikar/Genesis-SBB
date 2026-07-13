export interface RejectionResult {
  readonly resultId: string;
  readonly instanceId: string;
  readonly rejectedAt: Date;
  readonly rejectedByRoleId: string;
  readonly rejectionReason: string;
}
