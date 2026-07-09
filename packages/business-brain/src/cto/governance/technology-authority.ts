import { ExecutiveRole } from '../../core/contracts/executive-role.js';

export interface TechnologyAuthority {
  readonly authorityId: string;
  readonly role: ExecutiveRole;
  readonly canApproveArchitectureChanges: boolean;
  readonly canApproveInvestments: boolean;
  readonly maxInvestmentBudgetLimitUSD: number;
  readonly canOverrideSecurityGates: boolean;
}
