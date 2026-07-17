import { AuthorityId } from '../identity/authority-id.js';

export interface DelegationRule {
  readonly ruleId: string;
  readonly scopeAuthorityId: AuthorityId;
  readonly isDelegatableToSubordinates: boolean;
  readonly delegationApprovalRequiredFromRoleCode?: string;
  readonly maximumDelegationDurationDays: number;
  readonly defaultFallbackBackupRoleTitleCode?: string;
}
