import { AlertSeverity } from './alert-severity.js';

export interface AlertRule {
  readonly ruleId: string;
  readonly tenantId: string;
  readonly ruleCode: string; // e.g. "SLA_LATENCY_BREACH"
  readonly displayName: string;
  readonly metricExpressionString: string; // e.g. "observedLatencyMs > targetSlaLimitMs"
  readonly severity: AlertSeverity;
  readonly throttleIntervalSecondsCount: number;
  readonly isRuleActive: boolean;
}
