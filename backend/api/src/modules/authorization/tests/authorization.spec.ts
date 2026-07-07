import { RoleId } from '../domain/value-objects/role-id.value-object.js';
import { PermissionId } from '../domain/value-objects/permission-id.value-object.js';
import { PolicyId } from '../domain/value-objects/policy-id.value-object.js';
import { Role } from '../domain/entities/role.entity.js';
import { Permission } from '../domain/entities/permission.entity.js';
import { Policy, PolicyEffect } from '../domain/entities/policy.entity.js';
import { InMemoryRoleRepository } from '../infrastructure/repositories/in-memory-role.repository.js';
import { InMemoryPermissionRepository } from '../infrastructure/repositories/in-memory-permission.repository.js';
import { InMemoryPolicyRepository } from '../infrastructure/repositories/in-memory-policy.repository.js';
import { AuthorizationService } from '../domain/services/authorization.service.js';
import { PolicyEvaluationService } from '../domain/services/policy-evaluation.service.js';
import { AssignRoleCommand } from '../application/commands/assign-role.command.js';
import { AssignRoleHandler } from '../application/handlers/assign-role.handler.js';
import { RoleNotFoundException } from '../domain/exceptions/role-not-found.exception.js';

describe('Authorization Foundation (RBAC + PBAC)', () => {
  let roleRepo: InMemoryRoleRepository;
  let permRepo: InMemoryPermissionRepository;
  let policyRepo: InMemoryPolicyRepository;
  let authService: AuthorizationService;
  let policyEvalService: PolicyEvaluationService;
  let assignHandler: AssignRoleHandler;

  beforeEach(() => {
    roleRepo = new InMemoryRoleRepository();
    permRepo = new InMemoryPermissionRepository();
    policyRepo = new InMemoryPolicyRepository();
    authService = new AuthorizationService(roleRepo, permRepo);
    policyEvalService = new PolicyEvaluationService(policyRepo);
    assignHandler = new AssignRoleHandler(roleRepo);
  });

  describe('Value Objects', () => {
    it('should validate and create unique RoleId, PermissionId, and PolicyId VOs', () => {
      const rid1 = new RoleId('role_1');
      const rid2 = new RoleId('role_1');
      const rid3 = new RoleId('role_2');
      expect(rid1.getValue()).toBe('role_1');
      expect(rid1.equals(rid2)).toBe(true);
      expect(rid1.equals(rid3)).toBe(false);

      expect(() => new RoleId('')).toThrow('Role ID cannot be empty');
      expect(() => new PermissionId('')).toThrow('Permission ID cannot be empty');
      expect(() => new PolicyId('')).toThrow('Policy ID cannot be empty');
    });
  });

  describe('Role Entity & Aggregate Root', () => {
    it('should create role aggregate and record events', () => {
      const roleId = new RoleId('role_admin');
      const role = Role.create(roleId, 'Administrator');

      expect(role.getId().getValue()).toBe('role_admin');
      expect(role.getName()).toBe('Administrator');
      expect(role.getPermissions().length).toBe(0);

      const events = role.getDomainEvents();
      expect(events.length).toBe(1);
      expect(events[0].eventType).toBe('RoleCreated');
    });

    it('should support granting and revoking permissions with events', () => {
      const roleId = new RoleId('role_editor');
      const role = Role.create(roleId, 'Editor');
      const permId = new PermissionId('perm_write');

      role.grantPermission(permId);
      expect(role.hasPermission(permId)).toBe(true);

      const events = role.getDomainEvents();
      expect(events.length).toBe(2);
      expect(events[1].eventType).toBe('PermissionGranted');

      role.revokePermission(permId);
      expect(role.hasPermission(permId)).toBe(false);
    });
  });

  describe('Policy Entity (PBAC Model)', () => {
    it('should support flexible policy structures with resource, action, effect, and conditions', () => {
      const policyId = new PolicyId('pol_finance_deny');
      const policy = Policy.create(
        policyId,
        'DenyFinanceAccessDuringWeekend',
        PolicyEffect.Deny,
        ['finance:accounts:*'],
        ['finance:transfer'],
        [
          {
            key: 'env.dayOfWeek',
            operator: 'StringEquals',
            value: 'Sunday',
          },
        ]
      );

      expect(policy.getId().getValue()).toBe('pol_finance_deny');
      expect(policy.getEffect()).toBe(PolicyEffect.Deny);
      expect(policy.getResources()).toContain('finance:accounts:*');
      expect(policy.getActions()).toContain('finance:transfer');
      expect(policy.getConditions()[0].key).toBe('env.dayOfWeek');
    });
  });

  describe('Repositories', () => {
    it('should correctly save, find, and delete from in-memory stores', async () => {
      const roleId = new RoleId('role_guest');
      const role = Role.create(roleId, 'Guest');

      await roleRepo.save(role);
      const retrieved = await roleRepo.findById(roleId);
      expect(retrieved).not.toBeNull();
      expect(retrieved!.getName()).toBe('Guest');

      const byName = await roleRepo.findByName('Guest');
      expect(byName).not.toBeNull();

      await roleRepo.delete(roleId);
      const deleted = await roleRepo.findById(roleId);
      expect(deleted).toBeNull();
    });
  });

  describe('Assign Role Command Handler', () => {
    it('should assign a registered role successfully', async () => {
      const roleId = new RoleId('role_test');
      const role = Role.create(roleId, 'Test');
      await roleRepo.save(role);

      const command = new AssignRoleCommand('usr_1', 'role_test');
      await expect(assignHandler.handle(command)).resolves.not.toThrow();
    });

    it('should throw RoleNotFoundException if role does not exist', async () => {
      const command = new AssignRoleCommand('usr_1', 'role_missing');
      await expect(assignHandler.handle(command)).rejects.toThrow(RoleNotFoundException);
    });
  });
});

declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;
