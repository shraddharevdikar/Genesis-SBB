import { LoggerOptions, SBBLogger } from './types.js';
import { createPinoInstance } from './factory.js';
import { SBBLoggerImpl } from './logger.js';
import { DEFAULT_LOGGER_NAME } from './constants.js';

export * from './types.js';
export * from './constants.js';
export * from './serializers.js';
export * from './redaction.js';
export * from './factory.js';
export * from './child-logger.js';
export * from './logger.js';

let defaultLogger: SBBLogger | null = null;

/**
 * Main factory function to construct a custom typesafe SBBLogger.
 */
export function getLogger(options?: Partial<LoggerOptions>): SBBLogger {
  const mergedOptions: LoggerOptions = {
    name: DEFAULT_LOGGER_NAME,
    ...options,
  };
  const pinoInstance = createPinoInstance(mergedOptions);
  return new SBBLoggerImpl(pinoInstance);
}

/**
 * Lazy-initializes and retrieves the default global platform logger instance.
 */
export function getDefaultLogger(): SBBLogger {
  if (!defaultLogger) {
    defaultLogger = getLogger();
  }
  return defaultLogger;
}
