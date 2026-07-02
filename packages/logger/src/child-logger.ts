import { SBBLogger, LogContext } from './types.js';

/**
 * Creates a generic child logger from a parent logger.
 */
export function createChildLogger(parent: SBBLogger, context: LogContext): SBBLogger {
  return parent.child(context);
}

/**
 * Creates a highly standardized request context child logger.
 * Preserves tracing IDs (correlation ID, request ID) and identity parameters across API modules.
 */
export function createRequestLogger(
  parent: SBBLogger,
  correlationId: string,
  requestId: string,
  tenantId?: string,
  userId?: string
): SBBLogger {
  return parent.child({
    correlationId,
    requestId,
    tenantId,
    userId,
  });
}
