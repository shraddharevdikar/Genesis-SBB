export interface ExecutiveDelegatedAuthority {
  readonly authorityId: string;
  readonly uniqueAuthorityCode: string; // e.g. "AUTH-EXE-CEO-SPEND"
  readonly assigneeRoleIdString: string; // e.g. "CEO"
  readonly operationalScopeCode: 'CAPITAL_EXPENDITURE' | 'STRATEGIC_DIVESTMENT' | 'PARTNERSHIP_SIGN_OFF' | 'M_AND_A_AUTHORITY';
  readonly upperLimitAmountDecimal: number; // maximum financial threshold e.g. 5000000 (5M CHF)
  readonly currencyCode: string;
  readonly dualExecutiveApprovalRequiredFlag: boolean; // requires secondary sign-off (e.g. CEO + CFO)
  readonly activeFlag: boolean;
  readonly validFromDate: Date;
  readonly validToDate?: Date;
}
