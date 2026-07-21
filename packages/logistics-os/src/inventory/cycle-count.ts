export type CycleCountStatusCode = 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED_VERIFIED' | 'FAILED_DISCREPANCY';

export interface CycleCountLineItem {
  readonly binIdString: string;
  readonly skuCodeString: string;
  readonly anticipatedQuantityCount: number;
  readonly physicallyCountedQuantityCount: number;
  readonly discrepancyDeltaCount: number;
  readonly reCountRequiredFlag: boolean;
}

export interface CycleCount {
  readonly cycleCountId: string;
  readonly uniqueCycleCountCode: string; // e.g., "CYC-CNT-ZUR-20261015"
  readonly associatedWarehouseIdString: string;
  readonly targetLocationAislePrefixString?: string; // e.g. "Aisle 12-14"
  readonly scheduledDate: Date;
  readonly assignedCountersStaffRolesList: string[]; // Workers assigned to count (HROS)
  readonly lineItemsList: CycleCountLineItem[];
  readonly totalItemsCountedCount: number;
  readonly absoluteDiscrepancyPercentageDecimal: number; // e.g. 0.025 for 2.5% accuracy deviation
  readonly status: CycleCountStatusCode;
  readonly approvedByStaffRoleIdString?: string;
  readonly completedTimestamp?: Date;
  readonly lastModifiedAt: Date;
}
