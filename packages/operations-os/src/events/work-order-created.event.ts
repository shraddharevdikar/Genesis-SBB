import { WorkOrder } from '../work-management/work-order.js';
import { OperationsContext } from '../core/operations-context.js';

export interface WorkOrderCreatedEvent {
  readonly eventId: string;
  readonly eventName: 'WORK_ORDER_CREATED';
  readonly payload: {
    readonly workOrder: WorkOrder;
  };
  readonly context: OperationsContext;
}
