import pino from 'pino';
import { LoggerOptions } from './types.js';
import { getRedactionConfig } from './redaction.js';
import { serializers } from './serializers.js';
import { DEFAULT_LOG_LEVEL, DEFAULT_LOGGER_NAME } from './constants.js';

/**
 * Instantiates the core underlying Pino logger.
 * Auto-configures output format: JSON structure in production, and pino-pretty CLI-friendly stream in development.
 */
export function createPinoInstance(options: LoggerOptions) {
  const isProd = process.env.NODE_ENV === 'production';
  const usePretty = options.pretty !== undefined ? options.pretty : !isProd;
  
  const pinoOptions: pino.LoggerOptions = {
    name: options.name || DEFAULT_LOGGER_NAME,
    level: options.level || DEFAULT_LOG_LEVEL,
    redact: getRedactionConfig(options.redactPaths),
    serializers,
  };

  if (usePretty) {
    pinoOptions.transport = {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
        ignore: 'pid,hostname',
      },
    };
  }

  return pino(pinoOptions);
}
