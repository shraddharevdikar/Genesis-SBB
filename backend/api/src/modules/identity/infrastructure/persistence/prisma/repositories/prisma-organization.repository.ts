import { Injectable } from '@nestjs/common';
import { IOrganizationRepository } from '../../../../domain/repositories/organization.repository';
import { Organization } from '../../../../domain/entities/organization.entity';
import { OrganizationId } from '../../../../domain/value-objects/organization-id.value-object';
import { OrganizationName } from '../../../../domain/value-objects/organization-name.value-object';
import { OrganizationMapper } from '../../mappers/organization.mapper';

@Injectable()
export class PrismaOrganizationRepository implements IOrganizationRepository {
  private readonly storage = new Map<string, any>();

  public async findById(id: OrganizationId): Promise<Organization | null> {
    const raw = this.storage.get(id.getValue());
    if (!raw) {
      return null;
    }
    return OrganizationMapper.toDomain(raw);
  }

  public async findByName(name: OrganizationName): Promise<Organization | null> {
    for (const raw of this.storage.values()) {
      if (raw.name.toLowerCase() === name.getValue().toLowerCase()) {
        return OrganizationMapper.toDomain(raw);
      }
    }
    return null;
  }

  public async save(organization: Organization): Promise<void> {
    const raw = OrganizationMapper.toPersistence(organization);
    this.storage.set(organization.getId().getValue(), raw);
  }

  public async delete(id: OrganizationId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}
