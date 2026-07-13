export interface ApprovalPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly requiresDoubleValidation: boolean;
  readonly maxDurationMinutes: number;
  readonly autoApproveAfterTimeout: boolean;
  readonly complianceFrameworks: string[];
}
