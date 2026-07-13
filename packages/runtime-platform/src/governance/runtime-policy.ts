export interface RuntimePolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly maxConcurrencyLimit: number;
  readonly memoryLimitMb: number;
  readonly allowedOperationTypes: string[];
  readonly enforceStrictIsolation: boolean;
  readonly complianceLevel: 'STANDARD' | 'STRICT' | 'HIGH_COMPLIANCE';
}
