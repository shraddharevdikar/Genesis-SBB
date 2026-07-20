export type ApprovalPriorityCode =
  | 'LOW_ROUTINE'
  | 'MEDIUM_PRIORITY'
  | 'HIGH_THRESHOLD_SENSITIVE'
  | 'CRITICAL_URGENT';

export interface PaymentApproval {
  readonly approvalId: string;
  readonly uniqueApprovalCode: string; // e.g., "APP-PAY-2026-042"
  readonly targetScheduledPaymentItemIdString: string;
  readonly payeeSupplierName: string;
  readonly transactionAmount: number;
  readonly currencyCode: string;
  readonly priority: ApprovalPriorityCode;
  readonly requiredApproversOperatorRoleIdsList: string[]; // e.g., ["ROLE-CONTROLLER", "ROLE-CFO"]
  readonly signedOffApproversList: {
    readonly operatorRoleId: string;
    readonly signedAt: Date;
    readonly remarksText?: string;
  }[];
  readonly isFullyApprovedFlag: boolean;
  readonly isRejectedFlag: boolean;
  readonly rejectionRemarksText?: string;
  readonly expiresAt: Date;
  readonly createdAt: Date;
}
