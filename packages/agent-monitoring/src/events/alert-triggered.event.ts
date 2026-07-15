import { AlertSeverity } from '../alerts/alert-severity.js';

export interface AlertTriggeredEvent {
  readonly eventId: string;
  readonly alertId: string;
  readonly tenantId: string;
  readonly severity: AlertSeverity;
  readonly ruleCode: string;
  readonly summaryDescriptionText: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
