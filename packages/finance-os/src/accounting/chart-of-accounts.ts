export type AccountClassCode =
  | 'ASSET_CURRENT'
  | 'ASSET_NON_CURRENT'
  | 'LIABILITY_CURRENT'
  | 'LIABILITY_NON_CURRENT'
  | 'EQUITY'
  | 'REVENUE_OPERATING'
  | 'REVENUE_NON_OPERATING'
  | 'EXPENSE_OPERATING'
  | 'EXPENSE_NON_OPERATING'
  | 'EXPENSE_TAX';

export interface LedgerAccount {
  readonly accountId: string;
  readonly uniqueAccountCode: string; // e.g. "1010-CASH" or "4010-REVENUE-SOFTWARE"
  readonly displayName: string;
  readonly accountClass: AccountClassCode;
  readonly parentAccountId?: string;
  readonly currencyCode: string; // e.g. "CHF"
  readonly currentBalanceAmount: number;
  readonly normalBalanceType: 'DEBIT' | 'CREDIT';
  readonly isContraAccountFlag: boolean;
  readonly isActiveFlag: boolean;
}

export interface ChartOfAccounts {
  readonly chartId: string;
  readonly displayName: string;
  readonly accountsList: LedgerAccount[];
  readonly lastSyncedAt: Date;
}
