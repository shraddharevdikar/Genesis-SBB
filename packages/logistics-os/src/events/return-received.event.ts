import { ReturnOrder } from '../returns/return-order.js';
import { ReturnInspection } from '../returns/return-inspection.js';
import { LogisticsContext } from '../core/logistics-context.js';

export interface ReturnReceivedEvent {
  readonly eventId: string;
  readonly eventName: 'RETURN_RECEIVED';
  readonly payload: {
    readonly returnOrderRecord: ReturnOrder;
    readonly inspectionRecord: ReturnInspection;
    readonly reverseLogisticsTrackingCodeString?: string;
    readonly receivedAtHubTimestamp: Date;
  };
  readonly context: LogisticsContext;
}
