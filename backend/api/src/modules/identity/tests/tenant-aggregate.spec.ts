import { TenantApplicationService } from '../application/services/tenant-application.service';
import { CreateTenantHandler } from '../application/handlers/create-tenant.handler';
import { TenantDomainService } from '../domain/services/tenant-domain.service';
import { PrismaTenantRepository } from '../infrastructure/persistence/prisma/repositories/prisma-tenant.repository';
import { Tenant, TenantStatus } from '../domain/entities/tenant.entity';
import { TenantId } from '../domain/value-objects/tenant-id.value-object';
import { TenantName } from '../domain/value-objects/tenant-name.value-object';
import { CreateTenantCommand } from '../application/commands/create-tenant.command';

describe('Tenant Aggregate (DDD)', () => {
  let repository: PrismaTenantRepository;
  let domainService: TenantDomainService;
  let applicationService: TenantApplicationService;
  let createHandler: CreateTenantHandler;

  beforeEach(() => {
    repository = new PrismaTenantRepository();
    domainService = new TenantDomainService(repository);
    applicationService = new TenantApplicationService(repository);
    createHandler = new CreateTenantHandler(repository, domainService);
  });

  it('should instantiate value objects correctly with valid inputs', () => {
    const id = new TenantId('test-tenant-id');
    const name = new TenantName('My SBB Tenant');

    expect(id.getValue()).toBe('test-tenant-id');
    expect(name.getValue()).toBe('My SBB Tenant');
  });

  it('should enforce invalid tenant name rules', () => {
    expect(() => new TenantName('')).toThrow('Tenant name cannot be empty');
    expect(() => new TenantName('   ')).toThrow('Tenant name cannot be empty');
    expect(() => new TenantName('AB')).toThrow('Tenant name must be at least 3 characters long');
  });

  it('should correctly handle tenant aggregate lifecycle states and events', () => {
    const id = new TenantId('tenant-123');
    const name = new TenantName('SBB Operations');

    const tenant = Tenant.create(id, name);

    expect(tenant.getStatus()).toBe(TenantStatus.Provisioning);
    expect(tenant.getEvents().length).toBe(1);

    tenant.activate();
    expect(tenant.getStatus()).toBe(TenantStatus.Active);

    tenant.updateName(new TenantName('SBB Platforms'));
    expect(tenant.getName().getValue()).toBe('SBB Platforms');
    expect(tenant.getEvents().length).toBe(2);

    tenant.suspend();
    expect(tenant.getStatus()).toBe(TenantStatus.Suspended);
    expect(tenant.getEvents().length).toBe(3);

    tenant.clearEvents();
    expect(tenant.getEvents().length).toBe(0);
  });

  it('should register a new tenant successfully via create handler', async () => {
    const command = new CreateTenantCommand('SBB Logistics');
    const createdId = await createHandler.handle(command);

    expect(createdId).toBeDefined();

    const result = await applicationService.getTenantById(createdId);
    expect(result).not.toBeNull();
    expect(result.name).toBe('SBB Logistics');
    expect(result.status).toBe(TenantStatus.Provisioning);
  });

  it('should reject registration if name is duplicate', async () => {
    const command1 = new CreateTenantCommand('Duplicate Name');
    await createHandler.handle(command1);

    const command2 = new CreateTenantCommand('Duplicate Name');
    await expect(createHandler.handle(command2)).rejects.toThrow(
      "Tenant with name 'Duplicate Name' already exists."
    );
  });
});

declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;
