import { PolicyId } from '../identity/policy-id.js';

export interface SchedulingPolicy {
  readonly schedulingPolicyId: string;
  readonly policyId: PolicyId;
  readonly allowedExecutionWindows: Array<{
    readonly startLocalTime: string; // "HH:MM"
    readonly endLocalTime: string;   // "HH:MM"
  }>;
  readonly timezoneOverride?: string;
  readonly blackoutDates: Date[];
  readonly allowHolidayExecution: boolean;
  readonly maxDurationSeconds: number;
}
