import { WorkingHours } from './working-hours.js';
import { CapacityProfile } from './capacity-profile.js';

export type AvailabilityState = 
  | 'ONLINE' 
  | 'OFFLINE' 
  | 'BUSY' 
  | 'MAINTENANCE' 
  | 'TRAINING' 
  | 'SCHEDULED_DOWNTIME';

export interface AvailabilityProfile {
  readonly profileId: string;
  readonly agentId: string;
  readonly currentState: AvailabilityState;
  readonly workingHours: WorkingHours;
  readonly capacity: CapacityProfile;
  readonly scheduledDowntimeStartsAt?: Date;
  readonly scheduledDowntimeEndsAt?: Date;
}
