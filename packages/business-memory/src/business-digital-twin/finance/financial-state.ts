import { RevenueState } from './revenue-state.js';
import { CostState } from './cost-state.js';

export interface FinancialState {
  readonly fiscalYear: string;
  readonly fiscalQuarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  readonly baseCurrency: string; // e.g. "USD"
  readonly revenue: RevenueState;
  readonly cost: CostState;
  readonly operatingMarginPercent: number;
  readonly freeCashFlowUSD: number;
  readonly burnRateMonthlyUSD?: number;
}
