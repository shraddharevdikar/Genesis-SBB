import { OrganizationId } from '../identity/organization-id.js';
import { LegalEntityId } from '../identity/legal-entity-id.js';
import { BusinessUnitId } from '../identity/business-unit-id.js';
import { OrganizationContext } from './organization-context.js';
import { Organization } from '../hierarchy/organization.js';
import { LegalEntity } from '../hierarchy/legal-entity.js';
import { BusinessUnit } from '../hierarchy/business-unit.js';
import { ReportingRelationship } from '../structure/reporting-relationship.js';
import { OrganizationHealth } from '../metrics/organization-health.js';

export interface OrganizationFramework {
  /**
   * Initializes a top-level parent Organization, mapping global multi-tenant SaaS domains.
   */
  createOrganization(
    legalName: string,
    globalHeadquartersAddressText: string,
    context: OrganizationContext
  ): Promise<Organization>;

  /**
   * Registers a new legal company, subsidiary, or holding structure.
   */
  registerLegalEntity(
    organizationId: OrganizationId,
    commercialName: string,
    corporateRegistryCode: string,
    taxId: string,
    countryCode: string,
    context: OrganizationContext
  ): Promise<LegalEntity>;

  /**
   * Spawns an operational business unit owned by a specific legal entity.
   */
  createBusinessUnit(
    legalEntityId: LegalEntityId,
    name: string,
    purposeCode: string,
    regionCode: string,
    context: OrganizationContext
  ): Promise<BusinessUnit>;

  /**
   * Configures reporting lines, functional direct reports, and cross-team matrix relationships.
   */
  establishReportingStructure(
    relationship: ReportingRelationship,
    context: OrganizationContext
  ): Promise<void>;

  /**
   * Audits legal-entity, regional alignment, and structural health ratings across the organization.
   */
  evaluateOrganizationHealth(
    organizationId: OrganizationId,
    context: OrganizationContext
  ): Promise<OrganizationHealth>;

  /**
   * Executes dynamic corporate re-organizations, transfers business units, and logs state transitions.
   */
  restructureOrganization(
    organizationId: OrganizationId,
    restructuringNotes: string,
    context: OrganizationContext
  ): Promise<void>;
}
