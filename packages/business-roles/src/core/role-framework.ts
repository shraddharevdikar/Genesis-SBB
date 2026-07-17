import { BusinessRoleId } from '../identity/business-role-id.js';
import { ResponsibilityId } from '../identity/responsibility-id.js';
import { AuthorityId } from '../identity/authority-id.js';
import { RoleContext } from './role-context.js';
import { BusinessRole } from '../roles/business-role.js';
import { Responsibility } from '../responsibilities/responsibility.js';
import { Authority } from '../authorities/authority.js';
import { Competency } from '../competencies/competency.js';
import { PerformanceProfile } from '../performance/performance-profile.js';

export interface RoleFramework {
  /**
   * Spawns a brand-new multi-tenant extensible enterprise business role template or instance.
   */
  createRole(
    uniqueRoleCode: string,
    displayName: string,
    classificationCode: 'EXECUTIVE' | 'DIRECTOR' | 'MANAGER' | 'SPECIALIST' | 'ANALYST' | 'CUSTOM',
    departmentCostCenterCode: string,
    context: RoleContext
  ): Promise<BusinessRole>;

  /**
   * Binds a core execution responsibility or strategic accountability mandate to a business role.
   */
  assignResponsibility(
    roleId: BusinessRoleId,
    responsibility: Responsibility,
    context: RoleContext
  ): Promise<ResponsibilityId>;

  /**
   * Configures decision rights, legal signing power levels and spending budgets for a business role.
   */
  assignAuthority(
    roleId: BusinessRoleId,
    authority: Authority,
    context: RoleContext
  ): Promise<AuthorityId>;

  /**
   * Formulates continuous compliance learning curves, required skills, and regulatory certificates.
   */
  defineCompetencyRequirements(
    roleId: BusinessRoleId,
    competenciesList: Competency[],
    context: RoleContext
  ): Promise<void>;

  /**
   * Benchmarks measured metrics, qualitative targets, and overall efficiency ratios for a business role.
   */
  evaluateRolePerformance(
    roleId: BusinessRoleId,
    context: RoleContext
  ): Promise<PerformanceProfile>;

  /**
   * Sunsets a business role, archiving credentials and releasing workforce resources.
   */
  retireRole(
    roleId: BusinessRoleId,
    context: RoleContext
  ): Promise<void>;
}
