import { AuthorityLevel } from './authority-level.js';
import { Responsibility } from './responsibility.js';

export interface BusinessRole {
  readonly roleId: string;
  readonly roleTitleCode: string; // e.g. "CHIEF_MARKETING_OFFICER", "SENIOR_FINANCIAL_ANALYST"
  readonly displayName: string;
  readonly authority: AuthorityLevel;
  readonly coreResponsibilitiesList: Responsibility[];
  readonly isMultiTenantRole: boolean;
}
