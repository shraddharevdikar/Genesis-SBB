import { Injectable, Inject } from '@nestjs/common';
import { IOrganizationRepository } from '../../domain/repositories/organization.repository';
import { OrganizationId } from '../../domain/value-objects/organization-id.value-object';
import { OrganizationName } from '../../domain/value-objects/organization-name.value-object';

@Injectable()
export class OrganizationApplicationService {
  constructor(
    @Inject('IOrganizationRepository')
    private readonly organizationRepository: IOrganizationRepository
  ) {}

  public async getOrganizationById(id: string): Promise<any> {
    const org = await this.organizationRepository.findById(new OrganizationId(id));
    if (!org) {
      return null;
    }
    return {
      id: org.getId().getValue(),
      name: org.getName().getValue(),
      status: org.getStatus(),
      createdAt: org.getCreatedAt(),
      updatedAt: org.getUpdatedAt(),
    };
  }

  public async updateOrganizationName(id: string, newName: string): Promise<void> {
    const org = await this.organizationRepository.findById(new OrganizationId(id));
    if (!org) {
      throw new Error(`Organization with ID ${id} not found`);
    }
    org.updateName(new OrganizationName(newName));
    await this.organizationRepository.save(org);
  }

  public async activateOrganization(id: string): Promise<void> {
    const org = await this.organizationRepository.findById(new OrganizationId(id));
    if (!org) {
      throw new Error(`Organization with ID ${id} not found`);
    }
    org.activate();
    await this.organizationRepository.save(org);
  }

  public async suspendOrganization(id: string): Promise<void> {
    const org = await this.organizationRepository.findById(new OrganizationId(id));
    if (!org) {
      throw new Error(`Organization with ID ${id} not found`);
    }
    org.suspend();
    await this.organizationRepository.save(org);
  }

  public async archiveOrganization(id: string): Promise<void> {
    const org = await this.organizationRepository.findById(new OrganizationId(id));
    if (!org) {
      throw new Error(`Organization with ID ${id} not found`);
    }
    org.archive();
    await this.organizationRepository.save(org);
  }
}
