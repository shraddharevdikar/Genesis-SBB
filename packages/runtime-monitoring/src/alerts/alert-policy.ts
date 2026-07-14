import { AlertSeverity } from './alert-severity.js';

export interface AlertCondition {
  readonly metricName: string; // e.g. "errorRatePercentage"
  readonly operator: 'GREATER_THAN' | 'LESS_THAN' | 'EQUALS';
  readonly thresholdValue: number;
}

export interface AlertPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly name: string; // e.g. "HighErrorRateAlert"
  readonly targetEngineId: string;
  readonly conditions: AlertCondition[];
  readonly conditionCoalesceMode: 'ALL' | 'ANY';
  readonly severity: AlertSeverity;
  readonly triggerDelaySeconds: number; // Duration to sustain breach before raising alert
  readonly notificationChannels: string[];
  readonly isEnabled: boolean;
}
