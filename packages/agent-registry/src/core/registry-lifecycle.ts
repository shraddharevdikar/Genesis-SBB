import { RegistryEntry } from './registry-entry.js';
import { RegistryContext } from './registry-context.js';
import { AgentId } from '@sbb/agent-framework';
import { EmployeeNumber } from '../identity/employee-number.js';

export interface RegistryLifecycle {
  /**
   * Orchestrates the onboarding and initialization of a new Digital Employee directory record.
   */
  onboardAgent(
    tenantId: string,
    agentId: AgentId,
    name: string,
    departmentId: string,
    employeeNumber: EmployeeNumber,
    context: RegistryContext
  ): Promise<RegistryEntry>;

  /**
   * Promotes, transfers or updates an active agent's assignment details.
   */
  updateAssignment(
    tenantId: string,
    registryId: string,
    newDepartmentId: string,
    newManagerId: string,
    justification: string,
    context: RegistryContext
  ): Promise<RegistryEntry>;

  /**
   * Formally retires an agent record from the corporate workforce catalog.
   */
  retireAgent(
    tenantId: string,
    registryId: string,
    reason: string,
    context: RegistryContext
  ): Promise<void>;
}
