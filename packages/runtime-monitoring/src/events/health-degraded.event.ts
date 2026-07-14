import { SystemHealthState } from '../core/monitoring-state.js';

export interface HealthDegradedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly checkId: string;
  readonly targetEngineId: string;
  readonly priorStatus: SystemHealthState;
  readonly currentStatus: SystemHealthState;
  readonly triggerReason: string;
  readonly timestamp: Date;
}
