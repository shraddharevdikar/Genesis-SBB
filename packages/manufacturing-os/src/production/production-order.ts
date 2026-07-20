import { ProductId } from '../products/product.js';
import { ProductionOrderStatus } from '../core/production-lifecycle.js';

export interface ProductionOrder {
  readonly productionOrderId: string;
  readonly uniqueOrderCode: string; // e.g. "PRD-ORD-2026-042"
  readonly targetProductId: ProductId;
  readonly associatedBomIdString: string;
  readonly associatedRoutingIdString: string;
  readonly plannedQuantityToManufacture: number;
  readonly completedAndPassedQuantity: number;
  readonly scrapDefectRecordedQuantity: number;
  readonly targetStartDate: Date;
  readonly targetEndDate: Date;
  readonly actualStartDate?: Date;
  readonly actualEndDate?: Date;
  readonly status: ProductionOrderStatus;
  readonly targetWarehouseIdString?: string; // where to store finished goods
  readonly currencyCode: string;
  readonly totalActualCostIncurredAmount: number;
  readonly lastModifiedAt: Date;
}
