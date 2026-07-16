import { BusinessId } from '../identity/business-id.js';
import { DepartmentId } from '../identity/department-id.js';
import { BusinessContext } from './business-context.js';
import { BusinessDomainTypeCode } from './business-domain.js';
import { BusinessUnit } from '../organization/business-unit.js';
import { Department } from '../organization/department.ts'; // Wait, let's look at relative paths and extensions. It's best to use .js since compile options might target Node/ESM or tsconfig settings. The rest of SBB uses .js.
import { BusinessRole } from '../roles/business-role.js';
import { BusinessCapability } from '../capabilities/business-capability.js';
import { BusinessHealth } from '../metrics/business-health.js';

// We should import carefully.
export interface BusinessFoundation {
  /**
   * Initializes a new enterprise business entity within the multi-tenant scope.
   */
  createBusiness(
    name: string,
    targetDomain: BusinessDomainTypeCode,
    context: BusinessContext
  ): Promise<BusinessUnit>;

  /**
   * Spawns a new organizational department mapped to a division or business unit.
   */
  createDepartment(
    businessId: BusinessId,
    name: string,
    divisionCode: string,
    context: BusinessContext
  ): Promise<Department>;

  /**
   * Registers a reusable, strategic business capability.
   */
  registerCapability(
    capability: BusinessCapability,
    context: BusinessContext
  ): Promise<void>;

  /**
   * Grants a customized or standard role with appropriate authority and responsibilities to a participant.
   */
  assignBusinessRole(
    participantId: string,
    role: BusinessRole,
    context: BusinessContext
  ): Promise<void>;

  /**
   * Evaluates the current operational, capability, and organizational health ratios of the business.
   */
  evaluateBusinessHealth(
    businessId: BusinessId,
    context: BusinessContext
  ): Promise<BusinessHealth>;

  /**
   * Decommissions an operational business unit and transitions state safely to RETIRED.
   */
  retireBusiness(
    businessId: BusinessId,
    context: BusinessContext
  ): Promise<void>;
}
