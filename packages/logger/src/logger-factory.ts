import { createPinoInstance } from './factory.js';
import { LogLevel, StructuredLogger } from './types.js';
import { StructuredLoggerImpl } from './structured-logger.js';
import { DEFAULT_LOGGER_NAME } from './constants.js';

export class LoggerFactory {
  /**
   * Creates a structured logger instance with the specified name and level.
   */
  public static createLogger(
    name: string = DEFAULT_LOGGER_NAME,
    level: LogLevel = LogLevel.INFO
  ): StructuredLogger {
    const pinoInstance = createPinoInstance({
      name,
      level,
    });
    return new StructuredLoggerImpl(pinoInstance);
  }
}
