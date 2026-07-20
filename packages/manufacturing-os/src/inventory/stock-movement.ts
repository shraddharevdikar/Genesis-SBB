import { ProductId } from '../products/product.js';
import { WarehouseId } from './warehouse.js';
import { StockMovementType } from '../core/production-lifecycle.js';

export interface StockMovement {
  readonly movementId: string;
  readonly uniqueMovementCode: string; // e.g. "MVT-2026-00424"
  readonly associatedProductId: ProductId;
  readonly originWarehouseId?: WarehouseId;
  readonly destinationWarehouseId?: WarehouseId;
  readonly movementType: StockMovementType;
  readonly transactedQuantity: number;
  readonly batchLotNumberCodeText?: string; // links to Batch
  readonly sourceDocumentReferenceText?: string; // e.g. "PO-2026-CH-0422" or "PROD-ORD-02"
  readonly operatorStaffRoleIdString: string; // Links to HROS / Role
  readonly unitCostCalculatedBasisAmount: number;
  readonly currencyCode: string;
  readonly transactedAt: Date;
}
