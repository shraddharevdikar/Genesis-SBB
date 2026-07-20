import { ProductId } from '../products/product.js';

export interface BatchLotTraceability {
  readonly ancestorBatchCodeTextsList: string[]; // List of upstream batch codes used to manufacture this batch
  readonly childBatchCodeTextsList: string[]; // List of downstream batches where parts of this batch were routed
}

export interface ProductionBatchLot {
  readonly batchId: string;
  readonly uniqueBatchCode: string; // e.g. "BAT-2026-STEEL-0041"
  readonly associatedProductId: ProductId;
  readonly manufacturedQuantity: number;
  readonly dateOfManufacture: Date;
  readonly expirationDate?: Date;
  readonly heatNumberCodeText?: string; // metallurgy material trace code
  readonly structuralTraceability: BatchLotTraceability;
  readonly qualityInspectedStatus: 'PASSED' | 'FAILED_REJECTED' | 'UNTESTED_PENDING';
  readonly quarantineReleaseFlag: boolean;
  readonly activeFlag: boolean;
}
