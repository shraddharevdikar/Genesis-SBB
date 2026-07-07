import { Injectable, Inject } from '@nestjs/common';
import { ITenantRepository } from '../../domain/repositories/tenant.repository';
import { TenantId } from '../../domain/value-objects/tenant-id.value-object';
import { TenantName } from '../../domain/value-objects/tenant-name.value-object';

@Injectable()
export class TenantApplicationService {
  constructor(
    @Inject('ITenantRepository')
    private readonly tenantRepository: ITenantRepository
  ) {}

  public async getTenantById(id: string): Promise<any> {
    const tenant = await this.tenantRepository.findById(new TenantId(id));
    if (!tenant) {
      return null;
    }
    return {
      id: tenant.getId().getValue(),
      name: tenant.getName().getValue(),
      status: tenant.getStatus(),
      createdAt: tenant.getCreatedAt(),
      updatedAt: tenant.getUpdatedAt(),
    };
  }

  public async updateTenantName(id: string, newName: string): Promise<void> {
    const tenant = await this.tenantRepository.findById(new TenantId(id));
    if (!tenant) {
      throw new Error(`Tenant with ID ${id} not found`);
    }
    tenant.updateName(new TenantName(newName));
    await this.tenantRepository.save(tenant);
  }

  public async activateTenant(id: string): Promise<void> {
    const tenant = await this.tenantRepository.findById(new TenantId(id));
    if (!tenant) {
      throw new Error(`Tenant with ID ${id} not found`);
    }
    tenant.activate();
    await this.tenantRepository.save(tenant);
  }

  public async suspendTenant(id: string): Promise<void> {
    const tenant = await this.tenantRepository.findById(new TenantId(id));
    if (!tenant) {
      throw new Error(`Tenant with ID ${id} not found`);
    }
    tenant.suspend();
    await this.tenantRepository.save(tenant);
  }

  public async archiveTenant(id: string): Promise<void> {
    const tenant = await this.tenantRepository.findById(new TenantId(id));
    if (!tenant) {
      throw new Error(`Tenant with ID ${id} not found`);
    }
    tenant.archive();
    await this.tenantRepository.save(tenant);
  }
}
