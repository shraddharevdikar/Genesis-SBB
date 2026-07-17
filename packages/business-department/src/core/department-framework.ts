import { DepartmentContext } from './department-context.js';
import { DepartmentLifecycleState } from './department-lifecycle.js';
import { DepartmentInstanceId } from '../identity/department-instance-id.js';
import { DepartmentMission } from '../mission/department-mission.js';
import { DepartmentCapability } from '../capabilities/department-capability.js';
import { AiWorkforceProfile } from '../workforce/ai-workforce-profile.js';
import { HumanWorkforceProfile } from '../workforce/human-workforce-profile.js';
import { DepartmentHealth } from '../performance/department-health.js';

export interface DepartmentFramework {
  /**
   * Establishes a brand-new, multi-tenant capable, standardized organizational department instance.
   */
  establishDepartment(
    name: string,
    costCenterCode: string,
    mission: DepartmentMission,
    context: DepartmentContext
  ): Promise<DepartmentInstanceId>;

  /**
   * Assigns a standardized business capability to be governed and executed by the department.
   */
  assignCapability(
    departmentInstanceId: DepartmentInstanceId,
    capability: DepartmentCapability,
    context: DepartmentContext
  ): Promise<void>;

  /**
   * Assigns virtual digital employees (AI) or maps human work roles into the department workforce roster.
   */
  assignWorkforce(
    departmentInstanceId: DepartmentInstanceId,
    aiProfilesList: AiWorkforceProfile[],
    humanProfilesList: HumanWorkforceProfile[],
    context: DepartmentContext
  ): Promise<void>;

  /**
   * Performs an automated evaluation of the department's operational quality, KPI progress, and strategic metrics.
   */
  evaluateDepartmentHealth(
    departmentInstanceId: DepartmentInstanceId,
    context: DepartmentContext
  ): Promise<DepartmentHealth>;

  /**
   * Mutates the operating state (e.g., ACTIVE, REORGANIZING, SUSPENDED) of a department instance.
   */
  manageDepartmentLifecycle(
    departmentInstanceId: DepartmentInstanceId,
    targetState: DepartmentLifecycleState,
    context: DepartmentContext
  ): Promise<void>;

  /**
   * Gracefully decomissions a department, offboarding workforce and transferring assets.
   */
  retireDepartment(
    departmentInstanceId: DepartmentInstanceId,
    context: DepartmentContext
  ): Promise<void>;
}
