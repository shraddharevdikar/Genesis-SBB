import { HousekeepingTask } from '../housekeeping/housekeeping-task.js';
import { HospitalityContext } from '../core/hospitality-context.js';

export interface HousekeepingCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'HOUSEKEEPING_COMPLETED';
  readonly payload: {
    readonly completedTaskRecord: HousekeepingTask;
    readonly roomNumberString: string;
    readonly targetRoomCleaningStateBefore: string;
    readonly targetRoomCleaningStateAfter: string; // e.g. "INSPECTED_READY"
    readonly completedByStaffRoleIdString: string;
  };
  readonly context: HospitalityContext;
}
