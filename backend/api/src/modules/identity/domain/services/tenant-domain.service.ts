import { Injectable, Inject } from '@nestjs/common';
import { ITenantRepository } from '../repositories/tenant.repository';
import { TenantName } from '../value-objects/tenant-name.value-object';
import { DuplicateTenantException } from '../exceptions/duplicate-tenant.exception';

@Injectable()
export class TenantDomainService {
  constructor(
    @Inject('ITenantRepository')
    private readonly tenantRepository: ITenantRepository
  ) {}

  /**
   * Asserts that a given tenant name is unique within the system.
   * Throws DuplicateTenantException if a tenant with the same name already exists.
   */
  public async assertNameIsUnique(name: TenantName): Promise<void> {
    const existingTenant = await this.tenantRepository.findByName(name);
    if (existingTenant) {
      throw new DuplicateTenantException(name.getValue());
    }
  }
}
