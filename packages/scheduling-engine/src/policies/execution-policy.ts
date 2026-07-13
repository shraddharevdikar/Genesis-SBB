import { ScheduleId } from '../identity/schedule-id.js';

export type ConcurrencyBehavior = 'ALLOW' | 'FORBID' | 'REPLACE' | 'QUEUE';

export interface ExecutionPolicy {
  readonly policyId: string;
  readonly scheduleId: ScheduleId;
  readonly concurrencyBehavior: ConcurrencyBehavior;
  readonly maxQueuedRuns: number;
  readonly executionTimeoutMinutes: number;
  readonly stopOnFailure: boolean;
}
