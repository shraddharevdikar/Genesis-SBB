import { sleep } from '../async';

export interface RetryConfig {
  maxAttempts: number;
  delay: number;
  exponential: boolean;
  maxDelay?: number;
  jitter?: boolean;
}

export interface RetryState {
  attempt: number;
  error: any;
}

/**
 * Calculates the backoff delay based on the retry configuration.
 */
export function calculateBackoff(
  attempt: number,
  config: { delay: number; exponential: boolean; maxDelay?: number; jitter?: boolean }
): number {
  let nextDelay = config.delay;
  if (config.exponential) {
    nextDelay = config.delay * Math.pow(2, attempt - 1);
  }
  if (config.maxDelay) {
    nextDelay = Math.min(nextDelay, config.maxDelay);
  }
  if (config.jitter) {
    // Add random jitter of +/- 10%
    const jitterAmount = nextDelay * 0.1;
    const randomShift = (Math.random() * 2 - 1) * jitterAmount;
    nextDelay += randomShift;
  }
  return Math.max(0, nextDelay);
}

/**
 * Executes an asynchronous function and retries on failure based on detailed, customizable rules.
 */
export async function retryWithConfig<T>(
  fn: (state: RetryState) => Promise<T>,
  config: Partial<RetryConfig> = {},
  onRetry?: (state: RetryState) => void
): Promise<T> {
  const fullConfig: RetryConfig = {
    maxAttempts: 3,
    delay: 1000,
    exponential: true,
    jitter: false,
    ...config,
  };

  for (let attempt = 1; attempt <= fullConfig.maxAttempts; attempt++) {
    try {
      return await fn({ attempt, error: null });
    } catch (error) {
      const state: RetryState = { attempt, error };
      if (attempt === fullConfig.maxAttempts) {
        throw error;
      }
      if (onRetry) {
        onRetry(state);
      }
      const backoffDelay = calculateBackoff(attempt, fullConfig);
      await sleep(backoffDelay);
    }
  }
  throw new Error('Retry failed');
}
