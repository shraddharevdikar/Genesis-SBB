import { MembershipApplicationService } from '../application/services/membership-application.service';
import { CreateMembershipHandler } from '../application/handlers/create-membership.handler';
import { MembershipDomainService } from '../domain/services/membership-domain.service';
import { PrismaMembershipRepository } from '../infrastructure/persistence/prisma/repositories/prisma-membership.repository';
import { Membership, MembershipStatus } from '../domain/entities/membership.entity';
import { MembershipId } from '../domain/value-objects/membership-id.value-object';
import { MembershipRole } from '../domain/value-objects/membership-role.value-object';
import { CreateMembershipCommand } from '../application/commands/create-membership.command';

describe('Membership Aggregate (DDD)', () => {
  let repository: PrismaMembershipRepository;
  let domainService: MembershipDomainService;
  let applicationService: MembershipApplicationService;
  let createHandler: CreateMembershipHandler;

  beforeEach(() => {
    repository = new PrismaMembershipRepository();
    domainService = new MembershipDomainService(repository);
    applicationService = new MembershipApplicationService(repository);
    createHandler = new CreateMembershipHandler(repository, domainService);
  });

  it('should instantiate value objects correctly with valid inputs', () => {
    const id = new MembershipId('test-mem-id');
    const role = new MembershipRole('Admin');

    expect(id.getValue()).toBe('test-mem-id');
    expect(role.getValue()).toBe('Admin');
  });

  it('should enforce invalid role validation', () => {
    expect(() => new MembershipRole('')).toThrow('Membership role cannot be empty');
    expect(() => new MembershipRole('Developer')).toThrow(
      "Invalid membership role: 'Developer'. Must be one of: Owner, Admin, Manager, Member, Viewer"
    );
  });

  it('should handle lifecycle state transitions and fire domain events', () => {
    const id = new MembershipId('mem-123');
    const role = new MembershipRole('Member');
    const membership = Membership.create(id, 'user-456', 'org-789', role);

    expect(membership.getStatus()).toBe(MembershipStatus.Invited);
    expect(membership.getEvents().length).toBe(1);
    expect(membership.getEvents()[0].membershipId).toBe('mem-123');

    membership.activate();
    expect(membership.getStatus()).toBe(MembershipStatus.Active);
    expect(membership.getEvents().length).toBe(2);

    membership.updateRole(new MembershipRole('Manager'));
    expect(membership.getRole().getValue()).toBe('Manager');

    membership.suspend();
    expect(membership.getStatus()).toBe(MembershipStatus.Suspended);

    membership.revoke();
    expect(membership.getStatus()).toBe(MembershipStatus.Revoked);
    expect(membership.getEvents().length).toBe(4);

    membership.clearEvents();
    expect(membership.getEvents().length).toBe(0);
  });

  it('should register a new membership successfully via create handler', async () => {
    const command = new CreateMembershipCommand('user-001', 'org-002', 'Viewer');
    const createdId = await createHandler.handle(command);

    expect(createdId).toBeDefined();

    const result = await applicationService.getMembershipById(createdId);
    expect(result).not.toBeNull();
    expect(result.userId).toBe('user-001');
    expect(result.organizationId).toBe('org-002');
    expect(result.role).toBe('Viewer');
    expect(result.status).toBe(MembershipStatus.Invited);
  });

  it('should reject registration if membership already exists for user and org combination', async () => {
    const command1 = new CreateMembershipCommand('user-abc', 'org-xyz', 'Viewer');
    await createHandler.handle(command1);

    const command2 = new CreateMembershipCommand('user-abc', 'org-xyz', 'Admin');
    await expect(createHandler.handle(command2)).rejects.toThrow(
      "Membership for user 'user-abc' in organization 'org-xyz' already exists."
    );
  });
});

declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;
