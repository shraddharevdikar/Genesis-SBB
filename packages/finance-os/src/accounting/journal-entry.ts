import { JournalEntryLifecycleState } from '../core/finance-lifecycle.js';

export interface JournalLine {
  readonly lineId: string;
  readonly ledgerAccountCode: string; // e.g. "1010-CASH"
  readonly entryType: 'DEBIT' | 'CREDIT';
  readonly transactionAmount: number;
  readonly localCurrencyCode: string;
  readonly memoText: string;
}

export interface JournalEntry {
  readonly entryId: string;
  readonly uniqueEntryCode: string; // e.g. "JE-2026-07-0041"
  readonly postingDate: Date;
  readonly journalPeriodCode: string; // e.g. "PRD-2026-M07"
  readonly linesList: JournalLine[];
  readonly totalDebitsAmount: number;
  readonly totalCreditsAmount: number;
  readonly isBalancedFlag: boolean; // debits === credits
  readonly sourceDocumentReferenceURI?: string; // Link to Invoice, Receipt, PO, etc.
  readonly currentState: JournalEntryLifecycleState;
  readonly createdByOperatorRoleId: string;
  readonly approvedByOperatorRoleId?: string;
  readonly postedAt?: Date;
}
