import { ResponsibilityId } from '../identity/responsibility-id.js';

export interface Accountability {
  readonly accountabilityId: string;
  readonly targetResponsibilityId: ResponsibilityId;
  readonly ultimateOwnerRoleTitleCode: string; // e.g. "CMO", "CFO"
  readonly escalationContactRoleTitleCode: string; // e.g. "CEO"
  readonly hasUltimateSignOffAuthority: boolean;
  readonly auditTrailingLogEnabled: boolean;
}
