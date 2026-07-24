import { Injectable } from '@nestjs/common';
import { IRetryPolicy } from './interfaces/workflow-step.interface.js';

export interface IRetryResult<T> {
  success: boolean;
  result?: T;
  error?: any;
  attempts: number;
}

@Injectable()
export class RetryService {
  /**
   * Calculates the delay for a given attempt based on the retry policy.
   */
  calculateDelay(attempt: number, policy: IRetryPolicy): number {
    const baseDelay = policy.delayMs ?? 1000;
    const factor = policy.backoffFactor ?? 2;
    if (policy.exponential) {
      return baseDelay * Math.pow(factor, attempt - 1);
    }
    return baseDelay;
  }

  /**
   * Executes an asynchronous action with retry policy.
   */
  async executeWithRetry<T>(
    fn: (attempt: number) => Promise<T>,
    policy: IRetryPolicy,
    onAttemptFailed?: (attempt: number, error: any, delay: number) => Promise<void>
  ): Promise<IRetryResult<T>> {
    const maxAttempts = policy.maxAttempts ?? 3;
    let lastError: any;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const result = await fn(attempt);
        return {
          success: true,
          result,
          attempts: attempt,
        };
      } catch (error) {
        lastError = error;
        if (attempt < maxAttempts) {
          const delay = this.calculateDelay(attempt, policy);
          if (onAttemptFailed) {
            await onAttemptFailed(attempt, error, delay);
          }
          if (delay > 0) {
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      }
    }

    return {
      success: false,
      error: lastError,
      attempts: maxAttempts,
    };
  }
}
