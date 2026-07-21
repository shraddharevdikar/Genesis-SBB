import { SalesOrder } from '../orders/sales-order.js';
import { RetailContext } from '../core/retail-context.js';

export interface OrderCreatedEvent {
  readonly eventId: string;
  readonly eventName: 'ORDER_CREATED';
  readonly payload: {
    readonly salesOrder: SalesOrder;
  };
  readonly context: RetailContext;
}
