import { ExecutiveAlert } from '../intelligence/executive-alert.js';
import { ExecutiveContext } from '../core/executive-context.js';

export interface EnterpriseAlertRaisedEvent {
  readonly eventId: string;
  readonly eventName: 'ENTERPRISE_ALERT_RAISED';
  readonly payload: {
    readonly alert: ExecutiveAlert;
  };
  readonly context: ExecutiveContext;
}
