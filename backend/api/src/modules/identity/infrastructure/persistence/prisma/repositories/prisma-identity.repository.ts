import { Injectable } from '@nestjs/common';
import { IIdentityRepository } from '../../../../domain/repositories/identity.repository.interface';
import { Identity } from '../../../../domain/entities/identity-root.entity';
import { IdentityId } from '../../../../domain/value-objects/identity-id.value-object';
import { EmailAddress } from '../../../../domain/value-objects/email-address.value-object';
import { IdentityMapper } from '../../mappers/identity.mapper';

@Injectable()
export class PrismaIdentityRepository implements IIdentityRepository {
  private readonly storage = new Map<string, any>();

  constructor() {
    // Concrete repo wrapper using memory mock contracts as per ticket skeleton instructions
  }

  public async findById(id: IdentityId): Promise<Identity | null> {
    const raw = this.storage.get(id.getValue());
    if (!raw) return null;
    return IdentityMapper.toDomain(raw);
  }

  public async findByEmail(email: EmailAddress): Promise<Identity | null> {
    for (const raw of this.storage.values()) {
      if (raw.email === email.getValue()) {
        return IdentityMapper.toDomain(raw);
      }
    }
    return null;
  }

  public async save(identity: Identity): Promise<void> {
    const raw = IdentityMapper.toPersistence(identity);
    this.storage.set(identity.getId().getValue(), raw);
  }

  public async delete(id: IdentityId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}
