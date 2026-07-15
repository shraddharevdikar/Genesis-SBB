import { GovernancePolicy } from './governance-policy.js';

export interface BusinessPolicy extends GovernancePolicy {
  readonly category: 'BUSINESS';
  readonly financialDiscretionaryLimitChf: number; // Max Swiss Franc threshold for automatic digital employee decisions
  readonly targetDepartmentCodesList: string[]; // e.g., ["SBB_COMMUTING_LOGISTICS"]
  readonly requiresHumanApprovalOnExceedingLimit: boolean;
}
