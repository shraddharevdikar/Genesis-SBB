import { PolicyId } from '../identity/policy-id.js';
import { PolicyVersion } from '../core/policy-version.js';
import { PolicyLifecycle } from '../core/policy-lifecycle.js';
import { PolicyScope } from '../scope/policy-scope.js';
import { BusinessRule } from '../rules/business-rule.js';

export type PolicyCategoryCode =
  | 'REGULATORY_COMPLIANCE'
  | 'FINANCIAL_CONTROL'
  | 'SECURITY_ACCESS_CONTROL'
  | 'HUMAN_RESOURCES_CONDUCT'
  | 'OPERATIONAL_SLA'
  | 'AI_GOVERNANCE_ETHICS'
  | 'LEGAL_REPRESENTATION'
  | 'PROCUREMENT_CONTRACTING';

export interface BusinessPolicy {
  readonly policyId: PolicyId;
  readonly tenantId: string;
  readonly uniquePolicyCode: string; // e.g. "POL-FIN-LIMITS-2026"
  readonly displayName: string;
  readonly descriptionNotes: string;
  readonly category: PolicyCategoryCode;
  readonly scope: PolicyScope;
  readonly rulesList: BusinessRule[];
  readonly version: PolicyVersion;
  readonly lifecycle: PolicyLifecycle;
  readonly effectiveFromDate: Date;
  readonly expirationDate?: Date;
}
