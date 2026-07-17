import { BusinessRoleId } from '../identity/business-role-id.js';

export interface HumanRoleAssignment {
  readonly assignmentId: string;
  readonly targetRoleId: BusinessRoleId;
  readonly assignedHumanParticipantId: string;
  readonly allocationPercentageValue: number; // e.g. 100 for full-time role, or split
  readonly securityClearanceCode: 'L1_PUBLIC' | 'L2_CONFIDENTIAL' | 'L3_RESTRICTED' | 'L4_SOVEREIGN';
  readonly effectiveFrom: Date;
  readonly effectiveTo?: Date;
  readonly isActive: boolean;
}
