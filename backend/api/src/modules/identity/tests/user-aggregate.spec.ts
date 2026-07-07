import { UserApplicationService } from '../application/services/user-application.service';
import { CreateUserHandler } from '../application/handlers/create-user.handler';
import { UserDomainService } from '../domain/services/user-domain.service';
import { PrismaUserRepository } from '../infrastructure/persistence/prisma/repositories/prisma-user.repository';
import { User, UserStatus } from '../domain/entities/user.entity';
import { UserId } from '../domain/value-objects/user-id.value-object';
import { EmailAddress } from '../domain/value-objects/email-address.value-object';
import { DisplayName } from '../domain/value-objects/display-name.value-object';
import { CreateUserCommand } from '../application/commands/create-user.command';

describe('User Aggregate (DDD)', () => {
  let repository: PrismaUserRepository;
  let domainService: UserDomainService;
  let applicationService: UserApplicationService;
  let createHandler: CreateUserHandler;

  beforeEach(() => {
    repository = new PrismaUserRepository();
    domainService = new UserDomainService(repository);
    applicationService = new UserApplicationService(repository);
    createHandler = new CreateUserHandler(repository, domainService);
  });

  it('should instantiate value objects correctly with valid inputs', () => {
    const id = new UserId('test-user-id');
    const email = new EmailAddress('user@example.com');
    const name = new DisplayName('Jane Doe');

    expect(id.getValue()).toBe('test-user-id');
    expect(email.getValue()).toBe('user@example.com');
    expect(name.getValue()).toBe('Jane Doe');
  });

  it('should enforce invalid display name rules', () => {
    expect(() => new DisplayName('')).toThrow('Display name cannot be empty');
    expect(() => new DisplayName('   ')).toThrow('Display name cannot be empty');
  });

  it('should enforce invalid email validation rules', () => {
    expect(() => new EmailAddress('')).toThrow('Invalid email address format');
    expect(() => new EmailAddress('plain-text')).toThrow('Invalid email address format');
  });

  it('should correctly handle user aggregate lifecycle states and events', () => {
    const id = new UserId('test-user-123');
    const email = new EmailAddress('alice@example.com');
    const name = new DisplayName('Alice Smith');

    const user = User.create(id, email, name);

    expect(user.getStatus()).toBe(UserStatus.Pending);
    expect(user.getEvents().length).toBe(1);
    expect(user.getEvents()[0].email).toBe('alice@example.com');

    user.activate();
    expect(user.getStatus()).toBe(UserStatus.Active);
    expect(user.getEvents().length).toBe(2);

    user.deactivate();
    expect(user.getStatus()).toBe(UserStatus.Disabled);
    expect(user.getEvents().length).toBe(3);

    user.clearEvents();
    expect(user.getEvents().length).toBe(0);
  });

  it('should register a new user successfully via create handler', async () => {
    const command = new CreateUserCommand('bob@example.com', 'Bob Builder');
    const createdId = await createHandler.handle(command);

    expect(createdId).toBeDefined();

    const result = await applicationService.getUserById(createdId);
    expect(result).not.toBeNull();
    expect(result.email).toBe('bob@example.com');
    expect(result.displayName).toBe('Bob Builder');
    expect(result.status).toBe(UserStatus.Pending);
  });

  it('should reject registration if email is not unique', async () => {
    const command1 = new CreateUserCommand('unique@example.com', 'Unique Guy');
    await createHandler.handle(command1);

    const command2 = new CreateUserCommand('unique@example.com', 'Imposter');
    await expect(createHandler.handle(command2)).rejects.toThrow(
      "User with email address 'unique@example.com' already exists."
    );
  });
});

declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;
