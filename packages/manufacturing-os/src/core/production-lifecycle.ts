export type ProductionOrderStatus =
  | 'DRAFT'
  | 'APPROVED_PLANNED'
  | 'MATERIALS_STAGED'
  | 'IN_PRODUCTION'
  | 'QUALITY_HOLD'
  | 'COMPLETED_CLOSED'
  | 'CANCELLED';

export type WorkOrderStatus =
  | 'QUEUED'
  | 'RELEASED'
  | 'IN_PROGRESS'
  | 'PAUSED_BLOCKED'
  | 'COMPLETED'
  | 'FAILED_REWORK';

export type QualityCheckStatus =
  | 'PENDING'
  | 'IN_INSPECTION'
  | 'PASSED'
  | 'FAILED_NON_CONFORMING'
  | 'WAIVED_WITH_DEVIATION';

export type MachineOperationalState =
  | 'IDLE_READY'
  | 'RUNNING_PRODUCTION'
  | 'PLANNED_MAINTENANCE'
  | 'UNPLANNED_DOWNTIME_BREAKDOWN'
  | 'CALIBRATION'
  | 'POWER_OFF';

export type StockMovementType =
  | 'RECEIPT_FROM_SUPPLIER'
  | 'ISSUE_TO_PRODUCTION'
  | 'RETURN_FROM_PRODUCTION'
  | 'TRANSFER_BETWEEN_WAREHOUSES'
  | 'DISPATCH_TO_CUSTOMER'
  | 'INVENTORY_ADJUSTMENT';

export interface ProductionLifecycleState {
  readonly currentOrderStatus: ProductionOrderStatus;
  readonly activeWorkOrderIdString?: string;
  readonly lastInspectionTimestamp: Date;
  readonly accumulatedProductionRunMinutes: number;
}
