import { RegistryEntry } from './registry-entry.js';
import { RegistryContext } from './registry-context.js';
import { AgentId } from '@sbb/agent-framework';
import { EmployeeNumber } from '../identity/employee-number.js';
import { ManagerReference } from '../directory/manager-reference.js';

export interface AgentRegistry {
  /**
   * Registers a digital employee with the enterprise workforce directory.
   */
  registerAgent(
    tenantId: string,
    agentId: AgentId,
    name: string,
    employeeNumber: EmployeeNumber,
    departmentId: string,
    context: RegistryContext
  ): Promise<RegistryEntry>;

  /**
   * Retrieves detail mapping of a registered agent by directory ID.
   */
  discoverAgent(
    tenantId: string,
    registryId: string
  ): Promise<RegistryEntry | undefined>;

  /**
   * Returns registered agents matching a specific skill identifier.
   */
  findBySkill(
    tenantId: string,
    skillId: string
  ): Promise<RegistryEntry[]>;

  /**
   * Returns registered agents matching a specific capability identifier.
   */
  findByCapability(
    tenantId: string,
    capabilityId: string
  ): Promise<RegistryEntry[]>;

  /**
   * Assigns or updates the primary supervising manager for a digital employee.
   */
  assignManager(
    tenantId: string,
    registryId: string,
    manager: ManagerReference,
    context: RegistryContext
  ): Promise<RegistryEntry>;

  /**
   * Transfers a digital employee to a different cost-center department.
   */
  transferDepartment(
    tenantId: string,
    registryId: string,
    departmentId: string,
    context: RegistryContext
  ): Promise<RegistryEntry>;

  /**
   * Retires an agent record, marking their tenure as complete.
   */
  retireAgent(
    tenantId: string,
    registryId: string,
    reason: string,
    context: RegistryContext
  ): Promise<void>;
}
