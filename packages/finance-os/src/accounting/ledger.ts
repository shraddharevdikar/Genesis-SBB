import { JournalEntry } from './journal-entry.js';
import { ChartOfAccounts } from './chart-of-accounts.js';

export interface GeneralLedger {
  readonly ledgerId: string;
  readonly chart: ChartOfAccounts;
  readonly postedJournalEntriesList: JournalEntry[];
  readonly totalAssetBalanceAmount: number;
  readonly totalLiabilityBalanceAmount: number;
  readonly totalEquityBalanceAmount: number;
  readonly netIncomeAmountToDate: number;
  readonly currencyCode: string;
  readonly lastClosingDate?: Date;
  readonly lastCalculatedAt: Date;
}
