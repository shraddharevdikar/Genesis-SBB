export interface ProfitabilityStatus {
  readonly grossProfitMargin: number;  // gross margin percentage (e.g. 0.0 to 1.0 or 0 to 100)
  readonly netProfitMargin: number;    // net margin percentage
  readonly operatingMargin: number;    // operating margin percentage
  readonly ebitdaUSD: number;
  readonly netIncomeUSD: number;
  readonly isProfitable: boolean;
  readonly status: 'CRITICAL' | 'WARNING' | 'HEALTHY';
  readonly remarks: string;
}
