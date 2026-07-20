export interface ApprovalMatrixTier {
  readonly tierId: string;
  readonly tierName: string; // e.g. "Tier 1: Under 5K", "Tier 2: 5K to 50K", "Tier 3: Over 50K"
  readonly maximumLimitAmount: number;
  readonly requiredApproverRoleIdsList: string[]; // Role identifiers required to sign off
}

export interface ApprovalMatrix {
  readonly matrixId: string;
  readonly uniqueMatrixCode: string; // e.g. "AMX-EXPENSE-CHF"
  readonly displayName: string;
  readonly isDualSignOffRequiredFlag: boolean; // Four-eyes principle
  readonly tiersList: ApprovalMatrixTier[];
  readonly currencyCode: string; // e.g. "CHF"
  readonly lastUpdatedAt: Date;
}
