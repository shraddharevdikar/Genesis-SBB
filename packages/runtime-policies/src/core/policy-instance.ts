import { PolicyId } from '../identity/policy-id.js';
import { PolicyVersionId } from '../identity/policy-version-id.js';

export type PolicyEvaluationState = 'PENDING' | 'EVALUATED' | 'OVERRIDDEN' | 'FAILED';

export interface PolicyInstance {
  readonly policyInstanceId: string;
  readonly policyId: PolicyId;
  readonly versionId: PolicyVersionId;
  readonly tenantId: string;
  readonly evaluationState: PolicyEvaluationState;
  readonly evaluatedAt: Date;
  readonly effectiveFrom: Date;
  readonly expiresAt?: Date;
}
