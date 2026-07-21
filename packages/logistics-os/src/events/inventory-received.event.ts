import { PurchaseOrder } from '../procurement/purchase-order.js';
import { StockMovement } from '../warehousing/stock-movement.js';
import { LogisticsContext } from '../core/logistics-context.js';

export interface InventoryReceivedEvent {
  readonly eventId: string;
  readonly eventName: 'INVENTORY_RECEIVED';
  readonly payload: {
    readonly purchaseOrderRecord: PurchaseOrder;
    readonly stockMovementsList: StockMovement[];
    readonly gatePassIdentifierString: string;
    readonly carrierReceiptSignedFlag: boolean;
    readonly totalQuantityReceivedCount: number;
    readonly discrepanciesDetectedCount: number;
  };
  readonly context: LogisticsContext;
}
