import { ComplianceProfile } from './compliance-profile.js';
import { AuditProfile } from './audit-profile.js';

export interface GovernanceProfile {
  readonly profileId: string;
  readonly agentId: string;
  readonly humanInTheLoopRequired: boolean; // Double verification/oversight required before execution mutating commands
  readonly maximumAutonomousBudgetAmount?: number; // Financial limit for autonomous transactions
  readonly currencyCode?: string;
  readonly complianceProfile: ComplianceProfile;
  readonly auditProfile: AuditProfile;
}
