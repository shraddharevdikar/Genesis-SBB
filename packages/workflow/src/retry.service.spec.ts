import assert from 'node:assert';
import { test, describe } from 'node:test';
import { RetryService } from './retry.service.js';

describe('RetryService', () => {
  const retryService = new RetryService();

  test('should calculate exponential delay correctly', () => {
    const policy = { maxAttempts: 3, delayMs: 100, backoffFactor: 2, exponential: true };
    assert.strictEqual(retryService.calculateDelay(1, policy), 100);
    assert.strictEqual(retryService.calculateDelay(2, policy), 200);
    assert.strictEqual(retryService.calculateDelay(3, policy), 400);
  });

  test('should execute fn with retries until success', async () => {
    let attempts = 0;
    const policy = { maxAttempts: 3, delayMs: 10, exponential: false };

    const result = await retryService.executeWithRetry(
      async (attempt) => {
        attempts++;
        if (attempts < 2) {
          throw new Error('Transient error');
        }
        return 'success';
      },
      policy
    );

    assert.strictEqual(result.success, true);
    assert.strictEqual(result.result, 'success');
    assert.strictEqual(result.attempts, 2);
  });

  test('should return failure after reaching maxAttempts', async () => {
    const policy = { maxAttempts: 2, delayMs: 10, exponential: false };

    const result = await retryService.executeWithRetry(
      async () => {
        throw new Error('Persistent failure');
      },
      policy
    );

    assert.strictEqual(result.success, false);
    assert.strictEqual(result.error?.message, 'Persistent failure');
    assert.strictEqual(result.attempts, 2);
  });
});
