import { MetricId } from '../identity/metric-id.js';
import { MeasurementUnit } from './measurement-unit.js';
import { MeasurementFrequency } from './measurement-frequency.js';
import { AggregationRule } from './aggregation-rule.js';

export interface MetricDefinition {
  readonly metricId: MetricId;
  readonly uniqueMetricCode: string; // e.g. "MTR-ARR-USD"
  readonly displayName: string;
  readonly detailedFormulaText: string; // e.g. "Sum(Monthly_Subscription_Revenue) * 12"
  readonly unit: MeasurementUnit;
  readonly frequency: MeasurementFrequency;
  readonly aggregation: AggregationRule;
}
