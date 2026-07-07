import { Inject, Injectable } from '@nestjs/common';
import { CreateTenantCommand } from '../commands/create-tenant.command';
import { ITenantRepository } from '../../domain/repositories/tenant.repository';
import { TenantDomainService } from '../../domain/services/tenant-domain.service';
import { Tenant } from '../../domain/entities/tenant.entity';
import { TenantId } from '../../domain/value-objects/tenant-id.value-object';
import { TenantName } from '../../domain/value-objects/tenant-name.value-object';

@Injectable()
export class CreateTenantHandler {
  constructor(
    @Inject('ITenantRepository')
    private readonly tenantRepository: ITenantRepository,
    private readonly tenantDomainService: TenantDomainService
  ) {}

  public async handle(command: CreateTenantCommand): Promise<string> {
    const tenantName = new TenantName(command.name);

    // Enforce domain invariant: uniqueness of tenant name
    await this.tenantDomainService.assertNameIsUnique(tenantName);

    // Generate random / sequential TenantId
    const idValue = 'tnt_' + Math.random().toString(36).substring(2, 11);
    const tenantId = new TenantId(idValue);

    // Create tenant aggregate root
    const tenant = Tenant.create(tenantId, tenantName);

    // Save aggregate root
    await this.tenantRepository.save(tenant);

    return tenant.getId().getValue();
  }
}
