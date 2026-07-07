import { Inject, Injectable } from '@nestjs/common';
import { CreateOrganizationCommand } from '../commands/create-organization.command';
import { IOrganizationRepository } from '../../domain/repositories/organization.repository';
import { OrganizationDomainService } from '../../domain/services/organization-domain.service';
import { Organization } from '../../domain/entities/organization.entity';
import { OrganizationId } from '../../domain/value-objects/organization-id.value-object';
import { OrganizationName } from '../../domain/value-objects/organization-name.value-object';

@Injectable()
export class CreateOrganizationHandler {
  constructor(
    @Inject('IOrganizationRepository')
    private readonly organizationRepository: IOrganizationRepository,
    private readonly organizationDomainService: OrganizationDomainService
  ) {}

  public async handle(command: CreateOrganizationCommand): Promise<string> {
    const orgName = new OrganizationName(command.name);

    // Enforce domain invariant: uniqueness of the organization name
    await this.organizationDomainService.assertNameIsUnique(orgName);

    // Generate unique random OrganizationId
    const idValue = 'org_' + Math.random().toString(36).substring(2, 11);
    const orgId = new OrganizationId(idValue);

    // Create organization aggregate
    const organization = Organization.create(orgId, orgName);

    // Save aggregate root
    await this.organizationRepository.save(organization);

    return organization.getId().getValue();
  }
}
