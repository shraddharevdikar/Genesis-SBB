import { test } from 'node:test';
import assert from 'node:assert';
import { PasswordService } from './password.service.js';

test('PasswordService - hash and verify password', async () => {
  const service = new PasswordService();

  // Test hashing
  const password = 'SecurePassword123!';
  const hash = await service.hashPassword(password);
  
  assert.ok(hash, 'Hash should be generated successfully');
  assert.notStrictEqual(password, hash, 'Hash should not match the plain-text password');

  // Test successful verification
  const isValid = await service.verifyPassword(password, hash);
  assert.strictEqual(isValid, true, 'Verification should return true for correct password');

  // Test failed verification
  const isInvalid = await service.verifyPassword('WrongPassword', hash);
  assert.strictEqual(isInvalid, false, 'Verification should return false for incorrect password');
});
