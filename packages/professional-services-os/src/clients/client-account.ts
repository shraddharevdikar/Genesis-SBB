export interface ClientAccountBalance {
  readonly clientAccountBalanceId: string;
  readonly totalBilledToDateAmount: number; // Cumulative invoicing from billing
  readonly totalCollectedToDateAmount: number; // Completed financial cash receipts (FinanceOS)
  readonly totalOutstandingUnpaidAmount: number; // AR Ledger link
  readonly remainingRetainerBalanceAmount: number; // Prepaid hours/credits retainer
  readonly lastPaymentReceivedDate?: Date;
}

export interface ClientAccount {
  readonly clientAccountId: string;
  readonly uniqueClientAccountCode: string; // e.g. "ACC-CLI-1024"
  readonly associatedClientIdString: string; // Links to Client
  readonly defaultPaymentTermsCodeString: string; // Links to FinanceOS (e.g. NET30)
  readonly taxRegistrationNumberString?: string; // Tax ID for regional invoicing compliance
  readonly currencyCodeText: string; // e.g. "USD", "CHF"
  readonly financialBalanceSummary: ClientAccountBalance;
  readonly creditLimitAmount: number;
  readonly creditHoldFlag: boolean;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
