import { TeamApplicationService } from '../application/services/team-application.service';
import { CreateTeamHandler } from '../application/handlers/create-team.handler';
import { TeamDomainService } from '../domain/services/team-domain.service';
import { PrismaTeamRepository } from '../infrastructure/persistence/prisma/repositories/prisma-team.repository';
import { Team, TeamStatus } from '../domain/entities/team.entity';
import { TeamId } from '../domain/value-objects/team-id.value-object';
import { TeamName } from '../domain/value-objects/team-name.value-object';
import { CreateTeamCommand } from '../application/commands/create-team.command';

describe('Team Aggregate (DDD)', () => {
  let repository: PrismaTeamRepository;
  let domainService: TeamDomainService;
  let applicationService: TeamApplicationService;
  let createHandler: CreateTeamHandler;

  beforeEach(() => {
    repository = new PrismaTeamRepository();
    domainService = new TeamDomainService(repository);
    applicationService = new TeamApplicationService(repository);
    createHandler = new CreateTeamHandler(repository, domainService);
  });

  it('should instantiate value objects correctly with valid inputs', () => {
    const id = new TeamId('test-team-id');
    const name = new TeamName('Engineering');

    expect(id.getValue()).toBe('test-team-id');
    expect(name.getValue()).toBe('Engineering');
  });

  it('should enforce invalid name validation', () => {
    expect(() => new TeamName('')).toThrow('Team name cannot be empty');
    expect(() => new TeamName('QA')).toThrow('Team name must be at least 3 characters long');
  });

  it('should enforce organization ID validation', () => {
    const id = new TeamId('team-1');
    const name = new TeamName('Marketing');
    expect(() => new Team(id, '', name, TeamStatus.Active, new Date(), new Date())).toThrow(
      'Organization ID is required'
    );
  });

  it('should handle lifecycle state transitions and fire domain events', () => {
    const id = new TeamId('team-123');
    const name = new TeamName('Development');
    const team = Team.create(id, 'org-456', name);

    expect(team.getStatus()).toBe(TeamStatus.Active);
    expect(team.getEvents().length).toBe(1);
    expect(team.getEvents()[0].teamId).toBe('team-123');

    team.rename(new TeamName('Product Engineering'));
    expect(team.getName().getValue()).toBe('Product Engineering');
    expect(team.getEvents().length).toBe(2);

    team.archive();
    expect(team.getStatus()).toBe(TeamStatus.Archived);
    expect(team.getEvents().length).toBe(3);

    team.clearEvents();
    expect(team.getEvents().length).toBe(0);
  });

  it('should register a new team successfully via create handler', async () => {
    const command = new CreateTeamCommand('org-002', 'Design');
    const createdId = await createHandler.handle(command);

    expect(createdId).toBeDefined();

    const result = await applicationService.getTeamById(createdId);
    expect(result).not.toBeNull();
    expect(result.organizationId).toBe('org-002');
    expect(result.name).toBe('Design');
    expect(result.status).toBe(TeamStatus.Active);
  });

  it('should reject registration if team name already exists within organization boundary', async () => {
    const command1 = new CreateTeamCommand('org-xyz', 'Business');
    await createHandler.handle(command1);

    const command2 = new CreateTeamCommand('org-xyz', 'Business');
    await expect(createHandler.handle(command2)).rejects.toThrow(
      "Team with name 'Business' already exists in organization 'org-xyz'."
    );
  });
});

declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;
