import { AppError, AIError } from '@sbb/shared';

export function mapProviderError(error: any, providerId: string): AppError {
  if (error instanceof AppError) {
    return error;
  }

  const message = error?.message || String(error);
  const details = {
    originalError: error,
    providerId,
    timestamp: new Date().toISOString(),
  };

  // Map common HTTP or SDK codes if applicable
  if (error?.status === 401 || error?.statusCode === 401 || message.includes('API key')) {
    return new AIError(`[${providerId}] Authentication failed: ${message}`, { ...details, code: 'AUTH_FAILED' });
  }

  if (error?.status === 429 || error?.statusCode === 429 || message.includes('rate limit') || message.includes('quota')) {
    return new AIError(`[${providerId}] Rate limit exceeded: ${message}`, { ...details, code: 'RATE_LIMIT_EXCEEDED' });
  }

  return new AIError(`[${providerId}] Execution failed: ${message}`, details);
}
