import { PolicyId } from '../identity/policy-id.js';
import { PolicyVersionId } from '../identity/policy-version-id.js';
import { PolicyDefinition } from './policy-definition.js';
import { PolicyInstance } from './policy-instance.js';
import { PolicyContext } from './policy-context.js';
import { PolicyResult } from '../evaluation/policy-result.js';

export interface RuntimePolicies {
  /**
   * Registers a new custom governance policy blueprint in the enterprise registry.
   */
  registerPolicy(
    tenantId: string,
    definition: Omit<PolicyDefinition, 'createdAt' | 'currentVersionId'>,
    createdByRoleId: string
  ): Promise<PolicyDefinition>;

  /**
   * Validates if a custom policy schema or condition is syntactically/logically sound.
   */
  validatePolicy(
    tenantId: string,
    policyId: PolicyId,
    rulesDefinitionPayload: string
  ): Promise<{ isValid: boolean; issues: string[] }>;

  /**
   * Evaluates if a given execution request complies with the active target policies.
   */
  evaluatePolicy(
    tenantId: string,
    policyId: PolicyId,
    context: PolicyContext
  ): Promise<PolicyResult>;

  /**
   * Transitions a policy definition status to ACTIVE so it will be enforced.
   */
  activatePolicy(
    tenantId: string,
    policyId: PolicyId,
    activatedByRoleId: string,
    reason?: string
  ): Promise<PolicyInstance>;

  /**
   * Transitions a policy definition status to SUSPENDED or DEPRECATED.
   */
  deactivatePolicy(
    tenantId: string,
    policyId: PolicyId,
    deactivatedByRoleId: string,
    reason?: string
  ): Promise<PolicyInstance>;

  /**
   * Creates a new version revision blueprint under an existing policy rule scope.
   */
  versionPolicy(
    tenantId: string,
    policyId: PolicyId,
    versionNumber: string,
    rulesDefinitionPayload: string,
    changeNotes: string,
    approvedByRoleId: string
  ): Promise<PolicyVersionId>;
}
