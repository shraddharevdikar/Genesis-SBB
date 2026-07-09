export interface ApprovalThreshold {
  readonly actionType: 'CAPEX_SPEND' | 'HIRING_REQUISITION' | 'CONTRACT_SIGN_OFF' | 'SALARY_ADJUSTMENT' | 'PRODUCT_DEPRECIATION';
  readonly minLimitUSD: number;
  readonly maxLimitUSD: number;
  readonly authorizedRoleId: string; // references OrganizationalRole
  readonly doubleSignoffRequired: boolean;
}

export interface ApprovalMatrix {
  readonly matrixId: string;
  readonly tenantId: string;
  readonly thresholds: ApprovalThreshold[];
  readonly isEnforced: boolean;
  readonly lastReviewedAt: Date;
}
