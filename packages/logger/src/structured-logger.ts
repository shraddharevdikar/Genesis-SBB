import { Logger as PinoInstance } from 'pino';
import { StructuredLogger, LogContext } from './types.js';

export class StructuredLoggerImpl implements StructuredLogger {
  constructor(
    private readonly pino: PinoInstance,
    private readonly context: LogContext = {}
  ) {}

  public trace(msg: string, context?: LogContext): void {
    this.pino.trace({ ...this.context, ...context }, msg);
  }

  public debug(msg: string, context?: LogContext): void {
    this.pino.debug({ ...this.context, ...context }, msg);
  }

  public info(msg: string, context?: LogContext): void {
    this.pino.info({ ...this.context, ...context }, msg);
  }

  public warn(msg: string, context?: LogContext): void {
    this.pino.warn({ ...this.context, ...context }, msg);
  }

  public error(msg: string, error?: Error, context?: LogContext): void {
    this.pino.error({ err: error, ...this.context, ...context }, msg);
  }

  public fatal(msg: string, error?: Error, context?: LogContext): void {
    this.pino.fatal({ err: error, ...this.context, ...context }, msg);
  }

  public withContext(context: LogContext): StructuredLogger {
    const childPino = this.pino.child(context);
    return new StructuredLoggerImpl(childPino, { ...this.context, ...context });
  }
}
