import { ExecutionStatusCode } from './execution-status.js';

export interface ExecutionHealth {
  readonly healthId: string;
  readonly executionId: string;
  readonly status: ExecutionStatusCode;
  readonly activeRetryCount: number;
  readonly isSlaViolated: boolean;
  readonly currentDurationLagMinutes: number; // Discrepancy between actual vs planned step durations
  readonly lastMonitoredAt: Date;
}
