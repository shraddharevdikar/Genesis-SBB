import { Organization, OrganizationStatus } from '../../../domain/entities/organization.entity';
import { OrganizationId } from '../../../domain/value-objects/organization-id.value-object';
import { OrganizationName } from '../../../domain/value-objects/organization-name.value-object';

export class OrganizationMapper {
  public static toDomain(raw: any): Organization {
    return new Organization(
      new OrganizationId(raw.id),
      new OrganizationName(raw.name),
      raw.status as OrganizationStatus,
      new Date(raw.createdAt),
      new Date(raw.updatedAt)
    );
  }

  public static toPersistence(domain: Organization): any {
    return {
      id: domain.getId().getValue(),
      name: domain.getName().getValue(),
      status: domain.getStatus().toString(),
      createdAt: domain.getCreatedAt(),
      updatedAt: domain.getUpdatedAt(),
    };
  }
}
