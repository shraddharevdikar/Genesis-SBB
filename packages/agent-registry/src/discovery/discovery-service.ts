import { RegistryEntry } from '../core/registry-entry.js';

export interface DiscoveryService {
  /**
   * Discovers registered agents who match specific skill requirements.
   */
  findBySkill(tenantId: string, skillId: string): Promise<RegistryEntry[]>;

  /**
   * Discovers registered agents who match specific capability requirements.
   */
  findByCapability(tenantId: string, capabilityId: string): Promise<RegistryEntry[]>;

  /**
   * Discovers agents assigned to a specific business role.
   */
  findByRole(tenantId: string, roleName: string): Promise<RegistryEntry[]>;

  /**
   * Discovers agents within a specific department.
   */
  findByDepartment(tenantId: string, departmentId: string): Promise<RegistryEntry[]>;

  /**
   * Performs complex search across multiple criteria (skills, capabilities, availability).
   */
  searchWorkforce(
    tenantId: string,
    query: {
      readonly skillIds?: string[];
      readonly capabilityIds?: string[];
      readonly departmentId?: string;
      readonly isAvailableNow?: boolean;
    }
  ): Promise<RegistryEntry[]>;
}
