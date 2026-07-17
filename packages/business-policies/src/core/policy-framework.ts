import { PolicyId } from '../identity/policy-id.js';
import { PolicyRuleId } from '../identity/policy-rule-id.js';
import { PolicyContext } from './policy-context.js';
import { BusinessPolicy, PolicyCategoryCode } from '../policies/business-policy.js';
import { BusinessRule } from '../rules/business-rule.js';
import { PolicyScope } from '../scope/policy-scope.js';
import { ComplianceEvaluation } from '../compliance/compliance-evaluation.js';

export interface PolicyFramework {
  /**
   * Spawns a brand-new multi-tenant, domain-independent business policy blueprint.
   */
  createPolicy(
    uniquePolicyCode: string,
    category: PolicyCategoryCode,
    displayName: string,
    descriptionNotes: string,
    scope: PolicyScope,
    context: PolicyContext
  ): Promise<BusinessPolicy>;

  /**
   * Binds a structured, executable policy rule condition-action logic node.
   */
  defineRule(
    policyId: PolicyId,
    rule: BusinessRule,
    context: PolicyContext
  ): Promise<PolicyRuleId>;

  /**
   * Transitions a policy state to PUBLISHED_ACTIVE, enabling runtime evaluations.
   */
  publishPolicy(
    policyId: PolicyId,
    context: PolicyContext
  ): Promise<void>;

  /**
   * Checks if a target execution context matches the scope rules of an active policy.
   */
  evaluateApplicability(
    policyId: PolicyId,
    targetContextPayloadJsonString: string,
    context: PolicyContext
  ): Promise<boolean>;

  /**
   * Performs an audit check on compliance requirements and returns current evaluation.
   */
  reviewPolicy(
    policyId: PolicyId,
    context: PolicyContext
  ): Promise<ComplianceEvaluation>;

  /**
   * Sunsets an active policy, transitioning its enforcement state to RETIRED.
   */
  retirePolicy(
    policyId: PolicyId,
    context: PolicyContext
  ): Promise<void>;
}
