import { MetricId } from '../identity/metric-id.js';

export interface MeasurementValidation {
  readonly validationId: string;
  readonly targetMetricId: MetricId;
  readonly validationRuleExpressionJsonString: string; // e.g. "$.value >= 0"
  readonly customizedUserAlertMessageText: string;
  readonly strictBlockerHaltEnabled: boolean;
}
