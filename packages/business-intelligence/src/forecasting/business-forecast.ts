import { ForecastId } from '../identity/forecast-id.js';
import { ForecastHorizon } from './forecast-horizon.js';
import { ConfidenceRange } from './confidence-range.js';

export type ForecastCategoryCode =
  | 'REVENUE_ARR_MRR'
  | 'SALES_PIPELINE_CONVERSION'
  | 'DEMAND_CONSUMPTION'
  | 'CAPACITY_COMPUTATIONAL_INFRA'
  | 'RESOURCE_STAFFING'
  | 'AI_AGENT_WORKLOAD_TELEMETRY';

export interface BusinessForecast {
  readonly forecastId: ForecastId;
  readonly uniqueForecastCode: string; // e.g. "FCT-SALES-ARR-Q3"
  readonly displayName: string;
  readonly category: ForecastCategoryCode;
  readonly horizon: ForecastHorizon;
  readonly distributionConfidence: ConfidenceRange;
  readonly targetModelCode: string; // e.g. "MDL-FIN-ARR-FC"
  readonly accuracyHistoricalScoreRatio?: number; // e.g. 0.985 (MAPE based)
  readonly isStaleFlag: boolean;
  readonly generatedAt: Date;
}
