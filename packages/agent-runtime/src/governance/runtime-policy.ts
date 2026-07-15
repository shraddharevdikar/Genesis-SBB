export interface RuntimePolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly maxDurationSeconds: number; // Max session length
  readonly defaultRetryLimit: number;
  readonly forbiddenPayloadKeywords: string[]; // e.g., ["unmasked-raw-pii"]
  readonly enforceDoubleSignature: boolean;
}
