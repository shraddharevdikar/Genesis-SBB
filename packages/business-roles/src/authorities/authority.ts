import { AuthorityId } from '../identity/authority-id.js';

export interface Authority {
  readonly authorityId: AuthorityId;
  readonly scopeCode: 'GLOBAL' | 'REGIONAL' | 'DEPARTMENTAL' | 'TEAM_SPECIFIC';
  readonly financialSpendingLimitChf: number;
  readonly legalSigningPermissionLevel: number; // e.g. Level 1, 2, 3
  readonly isVetoRightAuthorized: boolean;
}
