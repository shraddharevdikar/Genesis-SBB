export interface DelegatedAuthority {
  readonly authorityId: string;
  readonly uniqueAuthorityCode: string; // e.g. "AUTH-VP-SPEND-LIMIT"
  readonly targetOperatorRoleIdString: string; // e.g. "VP_OF_ENGINEERING"
  readonly limitCategoryCode: 'CAPEX_BUY' | 'OPEX_COMMIT' | 'CONTRACT_SIGN_OFF' | 'HIRING_BUDGET';
  readonly maximumAuthorizedAmount: number; // e.g. 100000
  readonly currencyCode: string;
  readonly requireDualCounselSignOffFlag: boolean; // dual-control check
  readonly activeFlag: boolean;
  readonly validFrom: Date;
  readonly validTo?: Date;
}
