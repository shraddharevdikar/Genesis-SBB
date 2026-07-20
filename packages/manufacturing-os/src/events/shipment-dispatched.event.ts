import { Shipment } from '../logistics/shipment.js';
import { ManufacturingContext } from '../core/manufacturing-context.js';

export interface ShipmentDispatchedEvent {
  readonly eventId: string;
  readonly eventName: 'SHIPMENT_DISPATCHED';
  readonly payload: {
    readonly shipmentRecord: Shipment;
    readonly totalCargoWeightKilograms: number;
    readonly carrierTrackingNumberString?: string;
  };
  readonly context: ManufacturingContext;
}
