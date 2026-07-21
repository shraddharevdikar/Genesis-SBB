import { test } from 'node:test';
import assert from 'node:assert';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './services/password.service.js';
import { TokenService } from './services/token.service.js';
import { AuthService } from './auth.service.js';

test('AuthService - register and login workflow', async () => {
  const jwtService = new JwtService({});
  const passwordService = new PasswordService();

  // In-memory databases to track registration and login states during test run
  const usersStore = new Map<string, any>();
  const tenantsStore = new Map<string, any>();

  const mockDb = {
    $transaction: async (cb: any) => {
      return cb(mockDb);
    },
    user: {
      findUnique: async (args: any) => {
        return usersStore.get(args.where.email) || null;
      },
      create: async (args: any) => {
        const u = { 
          id: 'user-123', 
          ...args.data,
          // user model relationships
          organization: { id: 'org-123', tenantId: 'tenant-123' },
          userRoles: [{ role: { id: 'role-123', name: 'Administrator' } }]
        };
        usersStore.set(u.email, u);
        return u;
      },
    },
    tenant: {
      findUnique: async (args: any) => {
        return tenantsStore.get(args.where.slug) || null;
      },
      create: async (args: any) => {
        const t = { id: 'tenant-123', ...args.data };
        tenantsStore.set(t.slug, t);
        return t;
      },
    },
    organization: {
      create: async (args: any) => {
        return { id: 'org-123', ...args.data };
      },
    },
    role: {
      create: async (args: any) => {
        return { id: 'role-123', ...args.data };
      },
    },
    userRole: {
      create: async (args: any) => {
        return args.data;
      },
    },
    refreshToken: {
      create: async (args: any) => args.data,
    },
  } as any;

  const tokenService = new TokenService(jwtService, mockDb);
  const authService = new AuthService(mockDb, passwordService, tokenService);

  const registerDto = {
    email: 'test@sbb.com',
    password: 'SuperSecret123!',
    firstName: 'Jane',
    lastName: 'Doe',
    organizationName: 'Genesis Corp',
    industry: 'Professional Services',
  };

  // 1. Run Registration Flow
  const signupResult = await authService.register(registerDto);
  assert.strictEqual(signupResult.user.email, registerDto.email, 'User email should match registration dto');
  assert.ok(signupResult.accessToken, 'Access token should be issued on registration');
  assert.ok(signupResult.refreshToken, 'Refresh token should be issued on registration');

  // 2. Mock state update to simulate loaded relationships on database lookups
  const registeredUserRecord = usersStore.get(registerDto.email);
  registeredUserRecord.userRoles = [{ role: { name: 'Administrator' } }];
  registeredUserRecord.organization = { tenantId: 'tenant-123' };

  // 3. Run Login Flow
  const loginResult = await authService.login({
    email: registerDto.email,
    password: registerDto.password,
  });
  assert.strictEqual(loginResult.user.email, registerDto.email, 'User email should match on successful login');
  assert.ok(loginResult.accessToken, 'Access token should be issued on login');
});
