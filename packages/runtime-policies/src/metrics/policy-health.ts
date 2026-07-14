import { PolicyId } from '../identity/policy-id.js';

export interface PolicyHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly policyId?: PolicyId; // Empty for tenant overview, populated for single policy metrics
  readonly totalEvaluationRequestsCount: number;
  readonly averageEvaluationLatencyMs: number;
  readonly totalErrorsCount: number;
  readonly errorRatePercentage: number;
  readonly lastCalculatedAt: Date;
}
