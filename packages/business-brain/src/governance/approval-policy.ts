import { AuthorityLevel } from './authority-level.js';

export interface ApprovalPolicy {
  readonly policyId: string;
  readonly name: string;
  readonly description: string;
  readonly minAuthorityLevel: AuthorityLevel;
  readonly requiredStakeholderRoles: string[];
  readonly autoApproveUnderUSD?: number;
}
