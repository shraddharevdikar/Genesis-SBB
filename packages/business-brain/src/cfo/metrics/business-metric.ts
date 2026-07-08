import { FinancialKpi } from './financial-kpi.js';

export interface BusinessMetric {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly currentValue: number;
  readonly previousValue: number;
  readonly trend: 'UP' | 'DOWN' | 'STABLE';
  readonly financialKpiReference?: FinancialKpi;
  readonly department: string; // e.g. 'SALES', 'PRODUCT'
  readonly updatedAt: Date;
}
