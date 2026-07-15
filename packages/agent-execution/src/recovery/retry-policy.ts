export interface RetryPolicy {
  readonly policyId: string;
  readonly maxRetryAttempts: number;
  readonly backoffIntervalMs: number;
  readonly exponentialBackoffMultiplierFactor: number; // e.g. 1.5 or 2.0
  readonly nonRetryableFailureCodesList: string[]; // Failure exceptions that should fail immediately
}
