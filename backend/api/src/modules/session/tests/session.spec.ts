import { SessionId } from '../domain/value-objects/session-id.value-object.js';
import { DeviceId } from '../domain/value-objects/device-id.value-object.js';
import { Session } from '../domain/entities/session.entity.js';
import { SessionStatus } from '../domain/entities/session-status.enum.js';
import { InMemorySessionRepository } from '../infrastructure/repositories/in-memory-session.repository.js';
import { CreateSessionCommand } from '../application/commands/create-session.command.js';
import { CreateSessionHandler } from '../application/handlers/create-session.handler.js';
import { RevokeSessionCommand } from '../application/commands/revoke-session.command.js';
import { RevokeSessionHandler } from '../application/handlers/revoke-session.handler.js';
import { SessionApplicationService } from '../application/services/session-application.service.js';
import { SessionNotFoundException } from '../domain/exceptions/session-not-found.exception.js';
import { SessionMapper } from '../infrastructure/mappers/session-mapper.ts';

describe('Session Management Foundation', () => {
  let repository: InMemorySessionRepository;
  let createHandler: CreateSessionHandler;
  let revokeHandler: RevokeSessionHandler;
  let applicationService: SessionApplicationService;

  beforeEach(() => {
    repository = new InMemorySessionRepository();
    createHandler = new CreateSessionHandler(repository);
    revokeHandler = new RevokeSessionHandler(repository);
    applicationService = new SessionApplicationService(repository);
  });

  describe('Value Objects', () => {
    it('should validate and create unique SessionId and DeviceId VOs', () => {
      const sid1 = new SessionId('sess_1');
      const sid2 = new SessionId('sess_1');
      const sid3 = new SessionId('sess_2');

      expect(sid1.getValue()).toBe('sess_1');
      expect(sid1.equals(sid2)).toBe(true);
      expect(sid1.equals(sid3)).toBe(false);

      expect(() => new SessionId('')).toThrow('Session ID cannot be empty');
      expect(() => new DeviceId('')).toThrow('Device ID cannot be empty');
    });
  });

  describe('Session Entity & Lifecycle', () => {
    it('should correctly initialize a session aggregate with a creation event', () => {
      const sid = new SessionId('sess_001');
      const did = new DeviceId('dev_xyz');

      const session = Session.create(
        sid,
        'usr_007',
        'ten_001',
        did,
        'password',
        3600000 // 1 hour
      );

      expect(session.getId().getValue()).toBe('sess_001');
      expect(session.getUserId()).toBe('usr_007');
      expect(session.getTenantId()).toBe('ten_001');
      expect(session.getDeviceId().getValue()).toBe('dev_xyz');
      expect(session.getAuthenticationProvider()).toBe('password');
      expect(session.getStatus()).toBe(SessionStatus.Active);
      expect(session.getCreatedAt()).toBeDefined();
      expect(session.getExpiresAt().getTime()).toBeGreaterThan(session.getCreatedAt().getTime());

      const events = session.getDomainEvents();
      expect(events.length).toBe(1);
      expect(events[0].eventType).toBe('SessionCreated');
    });

    it('should allow recording access inside active lifespan', () => {
      const sid = new SessionId('sess_001');
      const did = new DeviceId('dev_xyz');
      const session = Session.create(sid, 'usr_007', 'ten_001', did, 'password', 3600000);

      const accessTime = new Date(session.getCreatedAt().getTime() + 1000);
      session.recordAccess(accessTime);

      expect(session.getLastAccessedAt()).toEqual(accessTime);
    });

    it('should fail access and transition to Expired if access recorded past lifespan', () => {
      const sid = new SessionId('sess_001');
      const did = new DeviceId('dev_xyz');
      const session = Session.create(sid, 'usr_007', 'ten_001', did, 'password', 100);

      const pastExpiryTime = new Date(Date.now() + 10000);
      expect(() => session.recordAccess(pastExpiryTime)).toThrow('Session has expired');
      expect(session.getStatus()).toBe(SessionStatus.Expired);
      expect(session.isExpired(pastExpiryTime)).toBe(true);

      const events = session.getDomainEvents();
      expect(events[1].eventType).toBe('SessionExpired');
    });

    it('should support explicit session revocation with events', () => {
      const sid = new SessionId('sess_001');
      const did = new DeviceId('dev_xyz');
      const session = Session.create(sid, 'usr_007', 'ten_001', did, 'password', 3600000);

      session.revoke();
      expect(session.getStatus()).toBe(SessionStatus.Revoked);
      expect(session.getRevokedAt()).toBeDefined();

      const events = session.getDomainEvents();
      expect(events[1].eventType).toBe('SessionRevoked');
    });
  });

  describe('Session Command Handlers', () => {
    it('should successfully execute CreateSessionCommand and persist the entity', async () => {
      const command = new CreateSessionCommand(
        'sess_cmd_1',
        'usr_99',
        'ten_abc',
        'dev_mobile',
        'oauth',
        50000
      );

      await createHandler.handle(command);

      const retrieved = await repository.findById(new SessionId('sess_cmd_1'));
      expect(retrieved).not.toBeNull();
      expect(retrieved!.getUserId()).toBe('usr_99');
      expect(retrieved!.getTenantId()).toBe('ten_abc');
      expect(retrieved!.getDeviceId().getValue()).toBe('dev_mobile');
    });

    it('should successfully execute RevokeSessionCommand and update entity state', async () => {
      const createCommand = new CreateSessionCommand(
        'sess_cmd_2',
        'usr_99',
        'ten_abc',
        'dev_mobile',
        'oauth',
        50000
      );
      await createHandler.handle(createCommand);

      const revokeCommand = new RevokeSessionCommand('sess_cmd_2');
      await revokeHandler.handle(revokeCommand);

      const retrieved = await repository.findById(new SessionId('sess_cmd_2'));
      expect(retrieved!.getStatus()).toBe(SessionStatus.Revoked);
    });

    it('should throw SessionNotFoundException if trying to revoke non-existing session', async () => {
      const command = new RevokeSessionCommand('sess_non_exist');
      await expect(revokeHandler.handle(command)).rejects.toThrow(SessionNotFoundException);
    });
  });

  describe('Session Application Service Helpers', () => {
    it('should return valid/invalid indicators correctly', async () => {
      const command = new CreateSessionCommand(
        'sess_srv_1',
        'usr_88',
        'ten_def',
        'dev_desktop',
        'password',
        300000
      );
      await createHandler.handle(command);

      const isValid = await applicationService.isSessionValid('sess_srv_1');
      expect(isValid).toBe(true);

      const nonExistValid = await applicationService.isSessionValid('sess_unknown');
      expect(nonExistValid).toBe(false);

      const userSessions = await applicationService.getActiveSessionsByUserId('usr_88');
      expect(userSessions.length).toBe(1);
    });
  });

  describe('Session Infrastructure Mapper', () => {
    it('should correctly map a session entity to a plain DTO object', () => {
      const sid = new SessionId('sess_map_1');
      const did = new DeviceId('dev_m');
      const session = Session.create(sid, 'usr_map', 'ten_map', did, 'password', 10000);

      const dto = SessionMapper.toDto(session);
      expect(dto.sessionId).toBe('sess_map_1');
      expect(dto.userId).toBe('usr_map');
      expect(dto.deviceId).toBe('dev_m');
      expect(dto.status).toBe(SessionStatus.Active);
    });
  });
});

declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;
