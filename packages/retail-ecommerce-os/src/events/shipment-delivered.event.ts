import { CommercialShipment } from '../fulfillment/shipment.js';
import { RetailContext } from '../core/retail-context.js';

export interface ShipmentDeliveredEvent {
  readonly eventId: string;
  readonly eventName: 'SHIPMENT_DELIVERED';
  readonly payload: {
    readonly shipmentRecord: CommercialShipment;
    readonly recipientSignedName?: string;
  };
  readonly context: RetailContext;
}
