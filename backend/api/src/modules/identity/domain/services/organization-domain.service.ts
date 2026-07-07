import { Injectable, Inject } from '@nestjs/common';
import { IOrganizationRepository } from '../repositories/organization.repository';
import { OrganizationName } from '../value-objects/organization-name.value-object';
import { DuplicateOrganizationException } from '../exceptions/duplicate-organization.exception';

@Injectable()
export class OrganizationDomainService {
  constructor(
    @Inject('IOrganizationRepository')
    private readonly organizationRepository: IOrganizationRepository
  ) {}

  /**
   * Asserts that a given organization name is unique within the system.
   * Throws DuplicateOrganizationException if an organization with the same name already exists.
   */
  public async assertNameIsUnique(name: OrganizationName): Promise<void> {
    const existingOrg = await this.organizationRepository.findByName(name);
    if (existingOrg) {
      throw new DuplicateOrganizationException(name.getValue());
    }
  }
}
