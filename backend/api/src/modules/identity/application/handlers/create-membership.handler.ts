import { Inject, Injectable } from '@nestjs/common';
import { CreateMembershipCommand } from '../commands/create-membership.command';
import { IMembershipRepository } from '../../domain/repositories/membership.repository';
import { MembershipDomainService } from '../../domain/services/membership-domain.service';
import { Membership } from '../../domain/entities/membership.entity';
import { MembershipId } from '../../domain/value-objects/membership-id.value-object';
import { MembershipRole } from '../../domain/value-objects/membership-role.value-object';

@Injectable()
export class CreateMembershipHandler {
  constructor(
    @Inject('IMembershipRepository')
    private readonly membershipRepository: IMembershipRepository,
    private readonly membershipDomainService: MembershipDomainService
  ) {}

  public async handle(command: CreateMembershipCommand): Promise<string> {
    // Assert membership is unique for the combination of userId and organizationId
    await this.membershipDomainService.assertMembershipIsUnique(
      command.userId,
      command.organizationId
    );

    // Instantiate and validate values
    const roleVO = new MembershipRole(command.role);
    const idValue = 'mem_' + Math.random().toString(36).substring(2, 11);
    const membershipId = new MembershipId(idValue);

    // Create the Membership aggregate root
    const membership = Membership.create(
      membershipId,
      command.userId,
      command.organizationId,
      roleVO
    );

    // Save state
    await this.membershipRepository.save(membership);

    return membership.getId().getValue();
  }
}
