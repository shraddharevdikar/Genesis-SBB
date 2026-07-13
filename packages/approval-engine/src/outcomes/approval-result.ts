export interface ApprovalResult {
  readonly resultId: string;
  readonly instanceId: string;
  readonly approvedAt: Date;
  readonly approvedByRoleId: string;
  readonly decisionPayload?: Record<string, any>;
  readonly signatureHash: string;
}
