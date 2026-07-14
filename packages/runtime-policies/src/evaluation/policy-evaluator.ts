import { PolicyId } from '../identity/policy-id.js';
import { PolicyContext } from '../core/policy-context.js';
import { PolicyResult } from './policy-result.js';

export interface PolicyEvaluator {
  /**
   * Evaluates a specific policy given active request context.
   */
  evaluate(
    tenantId: string,
    policyId: PolicyId,
    context: PolicyContext
  ): Promise<PolicyResult>;

  /**
   * Evaluates a set of multiple policies at once in batch format.
   */
  evaluateBatch(
    tenantId: string,
    policyIds: PolicyId[],
    context: PolicyContext
  ): Promise<PolicyResult[]>;
}
