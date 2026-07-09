import { ExecutiveRole } from '../../core/contracts/executive-role.js';

export interface AuthorityThreshold {
  readonly role: ExecutiveRole;
  readonly canApprovePromotion: boolean;
  readonly canApproveCompensationAdjustment: boolean;
  readonly maxHeadcountAdditionAllowed: number; // e.g. VP can approve up to 5 hires
}

export interface AuthorityMatrix {
  readonly matrixId: string;
  readonly tenantId: string;
  readonly thresholdList: AuthorityThreshold[];
  readonly canOverrideHiringFreeze: boolean;
  readonly isEnforced: boolean;
  readonly updatedAt: Date;
}
