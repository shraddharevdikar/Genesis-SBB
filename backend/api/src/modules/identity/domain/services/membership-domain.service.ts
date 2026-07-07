import { Injectable, Inject } from '@nestjs/common';
import { IMembershipRepository } from '../repositories/membership.repository';
import { DuplicateMembershipException } from '../exceptions/duplicate-membership.exception';

@Injectable()
export class MembershipDomainService {
  constructor(
    @Inject('IMembershipRepository')
    private readonly membershipRepository: IMembershipRepository
  ) {}

  /**
   * Enforces that a user cannot have multiple active or pending memberships within the same organization.
   */
  public async assertMembershipIsUnique(userId: string, organizationId: string): Promise<void> {
    const existingMembership = await this.membershipRepository.findByUserAndOrg(
      userId,
      organizationId
    );
    if (existingMembership) {
      throw new DuplicateMembershipException(userId, organizationId);
    }
  }
}
