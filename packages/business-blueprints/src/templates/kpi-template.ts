import { BusinessTemplate } from './business-template.js';

export interface KpiTemplate extends BusinessTemplate {
  readonly calculationFormulaText: string; // e.g. "SUM(revenue) - SUM(expenses)"
  readonly standardUnitOfMeasurementCode: string; // e.g. "CHF" or "RATIO"
  readonly defaultTargetGreenThresholdValue: number;
  readonly defaultCriticalRedThresholdValue: number;
}
