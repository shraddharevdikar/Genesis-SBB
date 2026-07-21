import { ReturnOrder } from '../orders/return-order.js';
import { RetailContext } from '../core/retail-context.js';

export interface ReturnCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'RETURN_COMPLETED';
  readonly payload: {
    readonly returnOrder: ReturnOrder;
    readonly totalRefundIssuedAmount: number;
  };
  readonly context: RetailContext;
}
