import { OrderFulfillment } from '../orders/order-fulfillment.js';
import { RetailContext } from '../core/retail-context.js';

export interface OrderFulfilledEvent {
  readonly eventId: string;
  readonly eventName: 'ORDER_FULFILLED';
  readonly payload: {
    readonly orderFulfillment: OrderFulfillment;
  };
  readonly context: RetailContext;
}
