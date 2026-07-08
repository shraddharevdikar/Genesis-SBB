export enum FinancialKpiType {
  REVENUE = 'REVENUE',
  GROSS_MARGIN = 'GROSS_MARGIN',
  EBITDA = 'EBITDA',
  CAC = 'CAC',
  LTV = 'LTV',
  ARR = 'ARR',
  MRR = 'MRR',
  BURN_RATE = 'BURN_RATE',
  RUNWAY = 'RUNWAY'
}

export interface FinancialKpi {
  readonly id: string;
  readonly type: FinancialKpiType;
  readonly value: number;
  readonly targetValue?: number;
  readonly unit: 'USD' | 'PERCENT' | 'MONTHS' | 'COUNT';
  readonly period: string; // e.g., 'Q2-2026', 'FY2026'
  readonly varianceFromTargetPercent?: number;
}
