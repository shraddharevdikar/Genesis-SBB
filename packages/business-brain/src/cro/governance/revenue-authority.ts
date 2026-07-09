import { ExecutiveRole } from '../../core/contracts/executive-role.js';

export interface RevenueAuthority {
  readonly authorityId: string;
  readonly role: ExecutiveRole;
  readonly canApprovePricingChanges: boolean;
  readonly canApproveDiscounts: boolean;
  readonly maxDiscountApprovalLimitPercent: number; // e.g. 25% max discount approval limit
  readonly canOverrideDiscountGates: boolean;
}
