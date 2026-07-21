import { Delivery } from '../delivery/delivery.js';
import { ProofOfDelivery } from '../delivery/proof-of-delivery.js';
import { LogisticsContext } from '../core/logistics-context.js';

export interface DeliveryCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'DELIVERY_COMPLETED';
  readonly payload: {
    readonly deliveryRecord: Delivery;
    readonly verificationProof: ProofOfDelivery;
    readonly totalAmountCollectedCodDecimal?: number; // Cash On Delivery if applicable
    readonly deliveredTimestamp: Date;
  };
  readonly context: LogisticsContext;
}
