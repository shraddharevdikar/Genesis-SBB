import { test } from 'node:test';
import assert from 'node:assert';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from './token.service.js';

test('TokenService - generate and verify tokens', async () => {
  const jwtService = new JwtService({});
  
  // Lightweight mock database service
  const mockDb = {
    refreshToken: {
      create: async (args: any) => args.data,
      findUnique: async () => null,
      update: async (args: any) => args.data,
      updateMany: async () => ({ count: 1 }),
    },
    user: {
      findUnique: async () => null,
      update: async (args: any) => args.data,
    }
  } as any;

  const service = new TokenService(jwtService, mockDb);

  const mockUser = {
    id: 'user-123',
    email: 'admin@genesis.com',
    organizationId: 'org-123',
    tenantId: 'tenant-123',
    tokenVersion: 1,
    roles: ['Administrator'],
  };

  const tokens = await service.generateTokens(mockUser);
  assert.ok(tokens.accessToken, 'Access token should be successfully generated');
  assert.ok(tokens.refreshToken, 'Refresh token should be successfully generated');

  // Verify the access token payload matches claims
  const accessPayload = await service.verifyAccessToken(tokens.accessToken);
  assert.strictEqual(accessPayload.userId, mockUser.id, 'Payload user ID should match');
  assert.strictEqual(accessPayload.email, mockUser.email, 'Payload email should match');
  assert.strictEqual(accessPayload.organizationId, mockUser.organizationId, 'Payload organization ID should match');
  assert.strictEqual(accessPayload.tenantId, mockUser.tenantId, 'Payload tenant ID should match');

  // Verify the refresh token payload
  const refreshPayload = await service.verifyRefreshToken(tokens.refreshToken);
  assert.strictEqual(refreshPayload.userId, mockUser.id, 'Refresh payload user ID should match');
});
