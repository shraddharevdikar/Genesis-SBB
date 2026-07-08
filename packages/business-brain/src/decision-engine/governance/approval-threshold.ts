import { AuthorityLevel } from '../../governance/authority-level.js';

export interface ApprovalThreshold {
  readonly thresholdId: string;
  readonly name: string;
  readonly minAuthorityLevelRequired: AuthorityLevel;
  readonly budgetCapUSD: number;
  readonly riskLevelCap: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}
