export interface TimezonePolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly defaultTimezone: string; // e.g. "UTC", "America/New_York"
  readonly handleDstAmbiguity: 'EXECUTE_ONCE' | 'EXECUTE_TWICE' | 'SKIP_REDUNDANT';
  readonly normalizeToUtc: boolean;
}
