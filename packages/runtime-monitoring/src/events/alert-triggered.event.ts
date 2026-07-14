import { AlertSeverity } from '../alerts/alert-severity.js';

export interface AlertTriggeredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly alertId: string;
  readonly targetEngineId: string;
  readonly severity: AlertSeverity;
  readonly alertMessage: string;
  readonly timestamp: Date;
}
