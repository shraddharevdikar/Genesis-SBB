import { Membership, MembershipStatus } from '../../../domain/entities/membership.entity';
import { MembershipId } from '../../../domain/value-objects/membership-id.value-object';
import { MembershipRole } from '../../../domain/value-objects/membership-role.value-object';

export class MembershipMapper {
  public static toDomain(raw: any): Membership {
    return new Membership(
      new MembershipId(raw.id),
      raw.userId,
      raw.organizationId,
      new MembershipRole(raw.role),
      raw.status as MembershipStatus,
      new Date(raw.joinedAt),
      new Date(raw.updatedAt)
    );
  }

  public static toPersistence(domain: Membership): any {
    return {
      id: domain.getId().getValue(),
      userId: domain.getUserId(),
      organizationId: domain.getOrganizationId(),
      role: domain.getRole().getValue().toString(),
      status: domain.getStatus().toString(),
      joinedAt: domain.getJoinedAt(),
      updatedAt: domain.getUpdatedAt(),
    };
  }
}
