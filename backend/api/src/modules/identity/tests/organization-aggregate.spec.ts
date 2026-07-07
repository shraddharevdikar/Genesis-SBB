import { OrganizationApplicationService } from '../application/services/organization-application.service';
import { CreateOrganizationHandler } from '../application/handlers/create-organization.handler';
import { OrganizationDomainService } from '../domain/services/organization-domain.service';
import { PrismaOrganizationRepository } from '../infrastructure/persistence/prisma/repositories/prisma-organization.repository';
import { Organization, OrganizationStatus } from '../domain/entities/organization.entity';
import { OrganizationId } from '../domain/value-objects/organization-id.value-object';
import { OrganizationName } from '../domain/value-objects/organization-name.value-object';
import { CreateOrganizationCommand } from '../application/commands/create-organization.command';

describe('Organization Aggregate (DDD)', () => {
  let repository: PrismaOrganizationRepository;
  let domainService: OrganizationDomainService;
  let applicationService: OrganizationApplicationService;
  let createHandler: CreateOrganizationHandler;

  beforeEach(() => {
    repository = new PrismaOrganizationRepository();
    domainService = new OrganizationDomainService(repository);
    applicationService = new OrganizationApplicationService(repository);
    createHandler = new CreateOrganizationHandler(repository, domainService);
  });

  it('should instantiate value objects correctly with valid inputs', () => {
    const id = new OrganizationId('test-org-id');
    const name = new OrganizationName('ACME Corporation');

    expect(id.getValue()).toBe('test-org-id');
    expect(name.getValue()).toBe('ACME Corporation');
  });

  it('should enforce invalid organization name rules', () => {
    expect(() => new OrganizationName('')).toThrow('Organization name cannot be empty');
    expect(() => new OrganizationName('   ')).toThrow('Organization name cannot be empty');
    expect(() => new OrganizationName('AB')).toThrow('Organization name must be at least 3 characters long');
  });

  it('should correctly handle organization aggregate lifecycle states and events', () => {
    const id = new OrganizationId('test-org-123');
    const name = new OrganizationName('SBB Engineering');

    const org = Organization.create(id, name);

    expect(org.getStatus()).toBe(OrganizationStatus.Pending);
    expect(org.getEvents().length).toBe(1);
    expect(org.getEvents()[0].name).toBe('SBB Engineering');

    org.activate();
    expect(org.getStatus()).toBe(OrganizationStatus.Active);

    org.updateName(new OrganizationName('SBB Platform Group'));
    expect(org.getName().getValue()).toBe('SBB Platform Group');
    expect(org.getEvents().length).toBe(2);

    org.archive();
    expect(org.getStatus()).toBe(OrganizationStatus.Archived);
    expect(org.getEvents().length).toBe(3);

    org.clearEvents();
    expect(org.getEvents().length).toBe(0);
  });

  it('should register a new organization successfully via create handler', async () => {
    const command = new CreateOrganizationCommand('SBB Core Team');
    const createdId = await createHandler.handle(command);

    expect(createdId).toBeDefined();

    const result = await applicationService.getOrganizationById(createdId);
    expect(result).not.toBeNull();
    expect(result.name).toBe('SBB Core Team');
    expect(result.status).toBe(OrganizationStatus.Pending);
  });

  it('should reject registration if name is duplicate', async () => {
    const command1 = new CreateOrganizationCommand('Duplicate SBB Name');
    await createHandler.handle(command1);

    const command2 = new CreateOrganizationCommand('Duplicate SBB Name');
    await expect(createHandler.handle(command2)).rejects.toThrow(
      "Organization with name 'Duplicate SBB Name' already exists."
    );
  });
});

declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;
