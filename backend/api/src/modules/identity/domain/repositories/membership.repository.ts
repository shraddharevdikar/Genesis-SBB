import { Membership } from '../entities/membership.entity';
import { MembershipId } from '../value-objects/membership-id.value-object';

export interface IMembershipRepository {
  findById(id: MembershipId): Promise<Membership | null>;
  findByUserAndOrg(userId: string, organizationId: string): Promise<Membership | null>;
  save(membership: Membership): Promise<void>;
  delete(id: MembershipId): Promise<void>;
}
