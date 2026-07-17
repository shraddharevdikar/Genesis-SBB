import { BusinessKpi } from './business-kpi.js';
import { BusinessRoleId } from '@sbb/business-roles';

export interface RoleKpi {
  readonly baseKpi: BusinessKpi;
  readonly targetBusinessRoleId: BusinessRoleId;
  readonly separationOfDutiesPolicyViolationsCount: number;
}
