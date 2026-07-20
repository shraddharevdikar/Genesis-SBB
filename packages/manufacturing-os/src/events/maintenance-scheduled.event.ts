import { PreventiveMaintenanceSchedule } from '../maintenance/preventive-maintenance.js';
import { ManufacturingContext } from '../core/manufacturing-context.js';

export interface MaintenanceScheduledEvent {
  readonly eventId: string;
  readonly eventName: 'MAINTENANCE_SCHEDULED';
  readonly payload: {
    readonly scheduledMaintenanceItem: PreventiveMaintenanceSchedule;
    readonly expectedMachineDowntimeMinutes: number;
  };
  readonly context: ManufacturingContext;
}
