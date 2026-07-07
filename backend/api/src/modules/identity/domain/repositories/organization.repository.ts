import { Organization } from '../entities/organization.entity';
import { OrganizationId } from '../value-objects/organization-id.value-object';
import { OrganizationName } from '../value-objects/organization-name.value-object';

export interface IOrganizationRepository {
  findById(id: OrganizationId): Promise<Organization | null>;
  findByName(name: OrganizationName): Promise<Organization | null>;
  save(organization: Organization): Promise<void>;
  delete(id: OrganizationId): Promise<void>;
}
