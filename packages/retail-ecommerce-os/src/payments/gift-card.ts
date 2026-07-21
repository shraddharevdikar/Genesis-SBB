export interface GiftCardLedgerEntry {
  readonly entryId: string;
  readonly deltaAmount: number; // positive for load, negative for spend
  readonly associatedSalesOrderIdString?: string;
  readonly transactedAt: Date;
}

export interface GiftCard {
  readonly giftCardId: string;
  readonly uniqueCardCode: string; // e.g. "GFT-2026-CH-99221-123"
  readonly secureRedemptionCodeString: string; // masked code used for authorization e.g., "XXXX-XXXX-8822"
  readonly purchasingCustomerIdString?: string;
  readonly currentRemainingBalanceAmount: number;
  readonly initialLoadedAmount: number;
  readonly currencyCode: string;
  readonly ledgerEntriesList: GiftCardLedgerEntry[];
  readonly activeStatusFlag: boolean;
  readonly expiresAt?: Date;
  readonly activatedAt: Date;
}
