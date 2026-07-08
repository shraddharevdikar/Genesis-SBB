export interface LiquidityStatus {
  readonly currentRatio: number; // Current Assets / Current Liabilities
  readonly quickRatio: number;   // (Current Assets - Inventory) / Current Liabilities
  readonly cashOnHandUSD: number;
  readonly shortTermAssetsUSD: number;
  readonly shortTermLiabilitiesUSD: number;
  readonly status: 'CRITICAL' | 'WARNING' | 'HEALTHY';
  readonly remarks: string;
}
