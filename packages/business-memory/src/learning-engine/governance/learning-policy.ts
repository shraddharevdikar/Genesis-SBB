import { LearningDomain } from '../core/learning-profile.js';

export interface LearningPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly applicableDomains: LearningDomain[];
  readonly requiresDoubleReflectionValidation: boolean;
  readonly validationOfficerRoleId: string;
  readonly complianceLevelRequired: number; // 0 to 100
}
