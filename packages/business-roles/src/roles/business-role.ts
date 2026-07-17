import { BusinessRoleId } from '../identity/business-role-id.js';
import { RoleLifecycle } from '../core/role-lifecycle.js';
import { Responsibility } from '../responsibilities/responsibility.js';
import { Authority } from '../authorities/authority.js';
import { Competency } from '../competencies/competency.js';
import { PerformanceProfile } from '../performance/performance-profile.js';

export interface BusinessRole {
  readonly roleId: BusinessRoleId;
  readonly uniqueRoleCode: string; // e.g. "CHIEF_INFORMATION_OFFICER", "LEGAL_COUNSEL"
  readonly displayName: string;
  readonly departmentCostCenterCode: string;
  readonly classificationCode: 'EXECUTIVE' | 'DIRECTOR' | 'MANAGER' | 'SPECIALIST' | 'ANALYST' | 'CUSTOM';
  readonly lifecycle: RoleLifecycle;
  readonly coreResponsibilitiesList: Responsibility[];
  readonly grantedAuthoritiesList: Authority[];
  readonly requiredCompetenciesList: Competency[];
  readonly performanceProfile: PerformanceProfile;
}
