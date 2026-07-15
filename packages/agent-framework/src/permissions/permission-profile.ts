import { PermissionSet } from './permission-set.js';

export interface PermissionProfile {
  readonly profileId: string;
  readonly agentId: string;
  readonly activePermissionSets: PermissionSet[];
  readonly mfaEnforced: boolean;
  readonly lastReviewedAt: Date;
  readonly reviewerRoleId: string;
}
