export type AdjustmentReasonCode = 'DAMAGE_SHRINKAGE' | 'THEFT_LOSS' | 'DATA_ENTRY_ERROR' | 'RECEIVING_DISCREPANCY' | 'CYCLE_COUNT_CORRECTION';

export interface InventoryAdjustment {
  readonly adjustmentId: string;
  readonly uniqueAdjustmentCode: string; // e.g. "ADJ-2026-992144"
  readonly associatedWarehouseIdString: string;
  readonly associatedBinIdString?: string;
  readonly skuCodeString: string;
  readonly quantityDeltaCount: number; // e.g. -5 for loss, +2 for found stock
  readonly reasonCode: AdjustmentReasonCode;
  readonly adjustedByStaffRoleIdString: string; // Audit trail (HROS)
  readonly approvedByStaffRoleIdString?: string; // High threshold manager signoff (FinanceOS audit)
  readonly inventoryValuationWriteOffAmountDecimal: number; // Linked to FinanceOS balance ledger
  readonly explanationNotesText?: string;
  readonly adjustmentTimestamp: Date;
}
