import { Injectable, Inject } from '@nestjs/common';
import { IMembershipRepository } from '../../domain/repositories/membership.repository';
import { MembershipId } from '../../domain/value-objects/membership-id.value-object';
import { MembershipRole } from '../../domain/value-objects/membership-role.value-object';

@Injectable()
export class MembershipApplicationService {
  constructor(
    @Inject('IMembershipRepository')
    private readonly membershipRepository: IMembershipRepository
  ) {}

  public async getMembershipById(id: string): Promise<any> {
    const membership = await this.membershipRepository.findById(new MembershipId(id));
    if (!membership) {
      return null;
    }
    return {
      id: membership.getId().getValue(),
      userId: membership.getUserId(),
      organizationId: membership.getOrganizationId(),
      role: membership.getRole().getValue(),
      status: membership.getStatus(),
      joinedAt: membership.getJoinedAt(),
      updatedAt: membership.getUpdatedAt(),
    };
  }

  public async updateMembershipRole(id: string, newRole: string): Promise<void> {
    const membership = await this.membershipRepository.findById(new MembershipId(id));
    if (!membership) {
      throw new Error(`Membership with ID ${id} not found`);
    }
    membership.updateRole(new MembershipRole(newRole));
    await this.membershipRepository.save(membership);
  }

  public async activateMembership(id: string): Promise<void> {
    const membership = await this.membershipRepository.findById(new MembershipId(id));
    if (!membership) {
      throw new Error(`Membership with ID ${id} not found`);
    }
    membership.activate();
    await this.membershipRepository.save(membership);
  }

  public async suspendMembership(id: string): Promise<void> {
    const membership = await this.membershipRepository.findById(new MembershipId(id));
    if (!membership) {
      throw new Error(`Membership with ID ${id} not found`);
    }
    membership.suspend();
    await this.membershipRepository.save(membership);
  }

  public async revokeMembership(id: string): Promise<void> {
    const membership = await this.membershipRepository.findById(new MembershipId(id));
    if (!membership) {
      throw new Error(`Membership with ID ${id} not found`);
    }
    membership.revoke();
    await this.membershipRepository.save(membership);
  }
}
