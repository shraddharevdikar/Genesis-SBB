import { OperationsContext } from '../core/operations-context.js';

export interface OperationalAlertEvent {
  readonly eventId: string;
  readonly eventName: 'OPERATIONAL_ALERT_TRIGGERED';
  readonly payload: {
    readonly alertCode: string;
    readonly alertTitle: string;
    readonly sourceEntityIdString: string;
    readonly triggerMetricValueText: string;
    readonly threatSeverity: 'INFO' | 'WARNING' | 'CRITICAL_ALERT';
  };
  readonly context: OperationsContext;
}
