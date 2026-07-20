export interface BankAccountBalance {
  readonly bankAccountId: string;
  readonly uniqueAccountCode: string; // e.g. "UBS-CH-123456"
  readonly bankName: string; // e.g. "UBS Group AG"
  readonly ibanString: string;
  readonly currencyCode: string; // e.g. "CHF"
  readonly balanceAmount: number;
  readonly lastReconciliationDate: Date;
}

export interface CashEquivalentHolding {
  readonly holdingId: string;
  readonly assetDescription: string; // e.g., "Swiss Confederation 3-Month Treasury Bill"
  readonly currentValueAmount: number;
  readonly currencyCode: string;
  readonly maturityDate?: Date;
}

export interface LiquidityPosition {
  readonly liquidityId: string;
  readonly reportDate: Date;
  readonly cashHoldingsList: BankAccountBalance[];
  readonly equivalentHoldingsList: CashEquivalentHolding[];
  readonly aggregateLiquidityInBaseCurrencyAmount: number;
  readonly baseCurrencyCode: string; // e.g. "CHF"
  readonly runwayDaysCount: number; // calculated cash divided by average burn rate
  readonly isLiquidityAlertTriggered: boolean; // if runway below safety threshold (e.g. 90 days)
  readonly calculatedAt: Date;
}
