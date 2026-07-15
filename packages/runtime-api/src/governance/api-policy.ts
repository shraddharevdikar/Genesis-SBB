export interface ApiPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly maxRequestPayloadSizeKb: number;
  readonly defaultTimeoutMs: number;
  readonly rateLimitRequestsPerMinute: number;
  readonly requireMlsIsolation: boolean; // Multilevel security requirements
  readonly isEnforced: boolean;
}
