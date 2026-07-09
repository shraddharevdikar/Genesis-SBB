import { OrganizationContext } from './organization-context.js';
import { OrganizationMemoryRecord } from './organization-memory-record.js';
import { CompanyProfile } from '../identity/company-profile.js';
import { Mission } from '../identity/mission.js';
import { Vision } from '../identity/vision.js';
import { CoreValues } from '../identity/core-values.js';
import { StrategicInitiative } from '../strategy/strategic-initiative.js';
import { BusinessCapability } from '../capabilities/business-capability.js';
import { OrganizationalRelationship } from '../relationships/organizational-relationship.js';
import { Policy } from '../governance/policy.js';
import { ApprovalMatrix } from '../governance/approval-matrix.js';

export interface OrganizationMemory {
  /**
   * Initializes or creates a persistent Organization Memory Record aggregate for a tenant.
   */
  createOrganizationMemory(
    context: OrganizationContext,
    record: Partial<OrganizationMemoryRecord>
  ): Promise<OrganizationMemoryRecord>;

  /**
   * Records or updates company identities (profile, mission, vision, core values).
   */
  updateCompanyIdentity(
    context: OrganizationContext,
    recordId: string,
    updates: {
      profile?: Partial<CompanyProfile>;
      mission?: Mission;
      vision?: Vision;
      coreValues?: CoreValues;
    }
  ): Promise<OrganizationMemoryRecord>;

  /**
   * Records a new strategic initiative or updates an existing one under the organization framework.
   */
  storeStrategicInitiative(
    context: OrganizationContext,
    recordId: string,
    initiative: StrategicInitiative
  ): Promise<OrganizationMemoryRecord>;

  /**
   * Defines or details a core business capability in the corporate capability map.
   */
  storeBusinessCapability(
    context: OrganizationContext,
    recordId: string,
    capability: BusinessCapability
  ): Promise<OrganizationMemoryRecord>;

  /**
   * Establishes a directional structured dependency or relationship between organization components.
   */
  relateOrganizationComponents(
    context: OrganizationContext,
    recordId: string,
    relationship: OrganizationalRelationship
  ): Promise<OrganizationMemoryRecord>;

  /**
   * Tracks and archives specific compliance policies or alters executive approval thresholds.
   */
  updateGovernanceThresholds(
    context: OrganizationContext,
    recordId: string,
    policies?: Policy[],
    matrix?: ApprovalMatrix
  ): Promise<OrganizationMemoryRecord>;
}
