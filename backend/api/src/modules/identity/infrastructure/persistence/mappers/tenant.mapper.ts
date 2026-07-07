import { Tenant, TenantStatus } from '../../../domain/entities/tenant.entity';
import { TenantId } from '../../../domain/value-objects/tenant-id.value-object';
import { TenantName } from '../../../domain/value-objects/tenant-name.value-object';

export class TenantMapper {
  public static toDomain(raw: any): Tenant {
    return new Tenant(
      new TenantId(raw.id),
      new TenantName(raw.name),
      raw.status as TenantStatus,
      new Date(raw.createdAt),
      new Date(raw.updatedAt)
    );
  }

  public static toPersistence(domain: Tenant): any {
    return {
      id: domain.getId().getValue(),
      name: domain.getName().getValue(),
      status: domain.getStatus().toString(),
      createdAt: domain.getCreatedAt(),
      updatedAt: domain.getUpdatedAt(),
    };
  }
}
