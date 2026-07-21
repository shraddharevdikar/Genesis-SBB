import { PurchaseOrder } from '../procurement/purchase-order.js';
import { LogisticsContext } from '../core/logistics-context.js';

export interface PurchaseOrderCreatedEvent {
  readonly eventId: string;
  readonly eventName: 'PURCHASE_ORDER_CREATED';
  readonly payload: {
    readonly purchaseOrderRecord: PurchaseOrder;
    readonly totalCapitalCommittedDecimal: number;
    readonly deliveryTargetHorizonDeadlineDate: Date;
  };
  readonly context: LogisticsContext;
}
