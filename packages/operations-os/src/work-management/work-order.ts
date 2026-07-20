import { WorkOrderLifecycleState } from '../core/operations-lifecycle.js';

export interface WorkOrderLineItem {
  readonly lineId: string;
  readonly detailedTaskDescription: string;
  readonly resourceClassificationCode: string;
  readonly allocatedQuantity: number;
}

export interface WorkOrder {
  readonly orderId: string;
  readonly uniqueOrderCode: string; // e.g. "WO-SERVER-DEPLOY-01"
  readonly requesterRoleIdString: string;
  readonly assigneeResourceIdString?: string;
  readonly targetAssetIdString?: string;
  readonly currentState: WorkOrderLifecycleState;
  readonly priority: 'ROUTINE' | 'ELEVATED' | 'CRITICAL_URGENT';
  readonly linesList: WorkOrderLineItem[];
  readonly scheduledStartDate: Date;
  readonly scheduledEndDate: Date;
  readonly completedAt?: Date;
  readonly verifiedByRoleIdString?: string;
}
