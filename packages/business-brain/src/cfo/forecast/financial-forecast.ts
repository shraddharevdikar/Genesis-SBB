import { ScenarioAnalysis } from './scenario-analysis.js';

export interface FinancialForecast {
  readonly forecastId: string;
  readonly tenantId: string;
  readonly targetFiscalPeriod: string; // e.g. "FY27-Q1"
  readonly projectedRevenueUSD: number;
  readonly projectedOperatingExpensesUSD: number;
  readonly scenarioAnalyses: ScenarioAnalysis[];
  readonly forecastAccuracyConfidence: number; // 0.0 to 1.0 representing uncertainty level
  readonly compiledAt: Date;
}
