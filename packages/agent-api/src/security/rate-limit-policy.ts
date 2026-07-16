export interface RateLimitPolicy {
  readonly policyId: string;
  readonly maxRequestsAllowedPerMinute: number;
  readonly burstAllowanceCount: number;
  readonly throttleDelayMs: number;
}
