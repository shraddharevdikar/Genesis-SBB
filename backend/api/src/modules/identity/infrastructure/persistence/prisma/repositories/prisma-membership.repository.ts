import { Injectable } from '@nestjs/common';
import { IMembershipRepository } from '../../../../domain/repositories/membership.repository';
import { Membership } from '../../../../domain/entities/membership.entity';
import { MembershipId } from '../../../../domain/value-objects/membership-id.value-object';
import { MembershipMapper } from '../../mappers/membership.mapper';

@Injectable()
export class PrismaMembershipRepository implements IMembershipRepository {
  private readonly storage = new Map<string, any>();

  public async findById(id: MembershipId): Promise<Membership | null> {
    const raw = this.storage.get(id.getValue());
    if (!raw) {
      return null;
    }
    return MembershipMapper.toDomain(raw);
  }

  public async findByUserAndOrg(
    userId: string,
    organizationId: string
  ): Promise<Membership | null> {
    for (const raw of this.storage.values()) {
      if (
        raw.userId === userId &&
        raw.organizationId === organizationId
      ) {
        return MembershipMapper.toDomain(raw);
      }
    }
    return null;
  }

  public async save(membership: Membership): Promise<void> {
    const raw = MembershipMapper.toPersistence(membership);
    this.storage.set(membership.getId().getValue(), raw);
  }

  public async delete(id: MembershipId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}
