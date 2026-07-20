import { ProductId } from '../products/product.js';

export interface ProductionScheduleInterval {
  readonly intervalId: string;
  readonly associatedProductionOrderIdString: string;
  readonly targetProductId: ProductId;
  readonly assignedWorkCenterIdString: string;
  readonly scheduledStartAt: Date;
  readonly scheduledEndAt: Date;
  readonly targetUnitsToProduceQuantity: number;
  readonly sequenceOrderIndex: number;
  readonly allocationStatus: 'DRAFT_PROPOSED' | 'COMMITTED_SCHEDULED' | 'BLOCKED_CAPACITY_LIMIT' | 'IN_PRODUCTION' | 'COMPLETED';
}

export interface ProductionSchedule {
  readonly scheduleId: string;
  readonly uniqueScheduleCode: string; // e.g. "SCHED-WEEK-2026-31"
  readonly schedulerStaffRoleIdString: string; // Links to HROS / Role
  readonly scheduledIntervalsList: ProductionScheduleInterval[];
  readonly scheduledPeriodStart: Date;
  readonly scheduledPeriodEnd: Date;
  readonly capacityUtilizationRatioDecimal: number; // e.g. 0.84 (84%)
  readonly publishedFlag: boolean;
  readonly lastModifiedAt: Date;
}
