export type DispositionActionCode = 'RE_STOCK_FIRST_QUALITY' | 'RE_STOCK_SECOND_OUTLET' | 'REPAIR_REFURBISH' | 'LIQUIDATE_WHOLESALE' | 'DESTROY_SCRAP';

export interface ReturnInspectionLineItem {
  readonly skuCodeString: string;
  readonly quantityInspectedCount: number;
  readonly quantityAcceptedCount: number;
  readonly quantityRejectedCount: number;
  readonly detailedPhysicalConditionNotes?: string;
  readonly recommendedDisposition: DispositionActionCode;
}

export interface ReturnInspection {
  readonly inspectionId: string;
  readonly uniqueInspectionCode: string; // e.g., "RIN-2026-1015"
  readonly associatedReturnOrderIdString: string; // Links to ReturnOrder
  readonly receivingWarehouseIdString: string; // Inspected at warehouse
  readonly inspectedByStaffRoleIdString: string; // Inspector (HROS)
  readonly inspectionLinesList: ReturnInspectionLineItem[];
  readonly totalInspectedCount: number;
  readonly totalScrapCount: number;
  readonly inspectionApprovedFlag: boolean;
  readonly actualInspectionTimestamp: Date;
}
