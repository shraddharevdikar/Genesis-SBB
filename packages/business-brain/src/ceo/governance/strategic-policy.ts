import { AuthorityLevel } from '../../governance/authority-level.js';

export interface PolicyConstraint {
  readonly constraintId: string;
  readonly category: 'FINANCIAL_LIMIT' | 'REGULATORY_COMPLIANCE' | 'BRAND_REPUTATION' | 'TECHNOLOGY_STACK' | 'HR_MINIMUMS';
  readonly ruleExpression: string;
  readonly severity: 'WARN' | 'BLOCK';
}

export interface StrategicPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly description: string;
  readonly minAuthorityLevelRequired: AuthorityLevel;
  readonly constraints: PolicyConstraint[];
  readonly isActive: boolean;
  readonly updatedAt: Date;
}
