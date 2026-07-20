import { WorkOrderStatus } from '../core/production-lifecycle.js';

export interface WorkOrderMaterialIssue {
  readonly componentProductIdString: string;
  readonly plannedIssueQuantity: number;
  readonly actualIssuedQuantity: number;
  readonly batchLotCodeUsedString?: string;
}

export interface WorkOrder {
  readonly workOrderId: string;
  readonly uniqueWorkOrderCode: string; // e.g. "WRK-ORD-2026-1045"
  readonly associatedProductionOrderIdString: string;
  readonly routingStepSequenceNumber: number; // e.g. 10
  readonly assignedWorkCenterIdString: string;
  readonly assignedProductionLineIdString?: string;
  readonly assignedMachineIdString?: string;
  readonly targetedUnitsQuantity: number;
  readonly actualCompletedUnitsQuantity: number;
  readonly actualScrapUnitsQuantity: number;
  readonly scheduledStartAt: Date;
  readonly scheduledEndAt: Date;
  readonly actualStartAt?: Date;
  readonly actualEndAt?: Date;
  readonly materialsIssuesList: WorkOrderMaterialIssue[];
  readonly status: WorkOrderStatus;
  readonly primaryOperatorStaffRoleIdString: string; // Links to HROS / Role
  readonly lastModifiedAt: Date;
}
