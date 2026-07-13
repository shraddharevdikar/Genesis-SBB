import { ScheduleId } from '../identity/schedule-id.js';

export interface RetryWindow {
  readonly retryWindowId: string;
  readonly scheduleId: ScheduleId;
  readonly maxAttempts: number;
  readonly initialDelaySeconds: number;
  readonly multiplier: number;
  readonly maxDelaySeconds: number;
  readonly deadLetterQueueTarget?: string; // Where to route after all retries are exhausted
}
