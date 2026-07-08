import { ExecutiveRole } from '../../core/contracts/executive-role.js';

export interface ApprovalLimit {
  readonly limitId: string;
  readonly role: ExecutiveRole;
  readonly maxSpendingAuthorityUSD: number;
  readonly maxInvestmentThresholdUSD: number;
  readonly requiresDoubleSignOff: boolean;
}
