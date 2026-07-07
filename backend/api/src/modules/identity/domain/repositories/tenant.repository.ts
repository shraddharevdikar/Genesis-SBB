import { Tenant } from '../entities/tenant.entity';
import { TenantId } from '../value-objects/tenant-id.value-object';
import { TenantName } from '../value-objects/tenant-name.value-object';

export interface ITenantRepository {
  findById(id: TenantId): Promise<Tenant | null>;
  findByName(name: TenantName): Promise<Tenant | null>;
  save(tenant: Tenant): Promise<void>;
  delete(id: TenantId): Promise<void>;
}
