export interface LatencyPolicy {
  readonly targetLatencyMs: number;
  readonly p95LatencyMsThreshold?: number;
  readonly timeoutMs?: number;
  readonly failoverOnSlowResponse: boolean;
}
