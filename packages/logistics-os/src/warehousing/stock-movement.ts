export type StockMovementTypeCode = 'RECEIVING_PUT_AWAY' | 'INTERNAL_REPLENISHMENT' | 'PICKING_FOR_SHIPMENT' | 'ZONE_CONSOLIDATION' | 'CYCLE_COUNT_ADJUSTMENT' | 'STAGED_FOR_RETURN';

export interface StockMovement {
  readonly movementId: string;
  readonly uniqueMovementCode: string; // e.g. "SM-ZUR-2026-992144"
  readonly movementType: StockMovementTypeCode;
  readonly skuCodeString: string;
  readonly quantityMovedCount: number;
  readonly sourceWarehouseIdString: string;
  readonly sourceBinIdString?: string; // Null if originating outside warehouse (e.g. supplier delivery)
  readonly destinationWarehouseIdString: string;
  readonly destinationBinIdString?: string; // Null if leaving warehouse (e.g. shipping out)
  readonly authorizedByStaffRoleIdString: string; // Links to HROS
  readonly movementExecutedByStaffRoleIdString?: string; // Housekeeper / Picker executing (OperationsOS)
  readonly physicalPalletLabelReference?: string;
  readonly movementTimestamp: Date;
}
