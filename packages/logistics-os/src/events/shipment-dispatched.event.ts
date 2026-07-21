import { Shipment } from '../transportation/shipment.js';
import { LogisticsContext } from '../core/logistics-context.js';

export interface ShipmentDispatchedEvent {
  readonly eventId: string;
  readonly eventName: 'SHIPMENT_DISPATCHED';
  readonly payload: {
    readonly shipmentRecord: Shipment;
    readonly grossTotalWeightKgDecimal: number;
    readonly sealsVerifiedCorrectFlag: boolean; // Regulatory seal validation
    readonly routePathPolylineJSON?: string;
  };
  readonly context: LogisticsContext;
}
