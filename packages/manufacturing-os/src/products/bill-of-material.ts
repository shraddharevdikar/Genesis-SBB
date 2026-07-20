import { ProductId } from './product.js';

export interface BomComponent {
  readonly componentLineId: string;
  readonly childProductIdString: string; // Product id of the component item
  readonly quantityRequiredQuantity: number;
  readonly scrapFactorPercentageDecimal: number; // expected material loss percentage, e.g. 0.02
  readonly operationSequenceStepNumber: number; // references Routing step where this part is introduced
  readonly phantomFlag: boolean; // true if this is an intermediate non-stocked transient assembly
}

export interface BillOfMaterial {
  readonly bomId: string;
  readonly uniqueBomCode: string; // e.g. "BOM-TURBINE-X100-V1"
  readonly parentProductId: ProductId;
  readonly revisionVersionString: string; // e.g. "1.0.0"
  readonly componentsList: BomComponent[];
  readonly minBatchSizeQuantity: number;
  readonly activeFlag: boolean;
  readonly approvedAt?: Date;
  readonly expiredAt?: Date;
}
