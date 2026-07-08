export interface CashFlowStatus {
  readonly operatingCashFlowUSD: number;
  readonly investingCashFlowUSD: number;
  readonly financingCashFlowUSD: number;
  readonly netCashFlowUSD: number;
  readonly freeCashFlowUSD: number;
  readonly trend: 'DECREASING' | 'STABLE' | 'INCREASING';
  readonly remarks: string;
}
