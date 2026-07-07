import { Injectable } from '@nestjs/common';
import { ITenantRepository } from '../../../../domain/repositories/tenant.repository';
import { Tenant } from '../../../../domain/entities/tenant.entity';
import { TenantId } from '../../../../domain/value-objects/tenant-id.value-object';
import { TenantName } from '../../../../domain/value-objects/tenant-name.value-object';
import { TenantMapper } from '../../mappers/tenant.mapper';

@Injectable()
export class PrismaTenantRepository implements ITenantRepository {
  private readonly storage = new Map<string, any>();

  public async findById(id: TenantId): Promise<Tenant | null> {
    const raw = this.storage.get(id.getValue());
    if (!raw) {
      return null;
    }
    return TenantMapper.toDomain(raw);
  }

  public async findByName(name: TenantName): Promise<Tenant | null> {
    for (const raw of this.storage.values()) {
      if (raw.name.toLowerCase() === name.getValue().toLowerCase()) {
        return TenantMapper.toDomain(raw);
      }
    }
    return null;
  }

  public async save(tenant: Tenant): Promise<void> {
    const raw = TenantMapper.toPersistence(tenant);
    this.storage.set(tenant.getId().getValue(), raw);
  }

  public async delete(id: TenantId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}
