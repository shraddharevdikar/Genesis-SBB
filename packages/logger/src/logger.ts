import { Logger as PinoInstance } from 'pino';
import { SBBLogger, LogContext } from './types.js';

/**
 * Enterprise wrapper around Pino.
 * Guarantees proper method overloading, typesafe logging,
 * structured child instantiation, and performance metric tracing.
 */
export class SBBLoggerImpl implements SBBLogger {
  constructor(public readonly pino: PinoInstance) {}

  trace(msg: string, ...args: any[]): void;
  trace(obj: object, msg?: string, ...args: any[]): void;
  trace(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.trace(objOrMsg, msgOrArg, ...args);
  }

  debug(msg: string, ...args: any[]): void;
  debug(obj: object, msg?: string, ...args: any[]): void;
  debug(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.debug(objOrMsg, msgOrArg, ...args);
  }

  info(msg: string, ...args: any[]): void;
  info(obj: object, msg?: string, ...args: any[]): void;
  info(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.info(objOrMsg, msgOrArg, ...args);
  }

  warn(msg: string, ...args: any[]): void;
  warn(obj: object, msg?: string, ...args: any[]): void;
  warn(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.warn(objOrMsg, msgOrArg, ...args);
  }

  error(msg: string, ...args: any[]): void;
  error(obj: object, msg?: string, ...args: any[]): void;
  error(err: Error, msg?: string, ...args: any[]): void;
  error(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.error(objOrMsg, msgOrArg, ...args);
  }

  fatal(msg: string, ...args: any[]): void;
  fatal(obj: object, msg?: string, ...args: any[]): void;
  fatal(err: Error, msg?: string, ...args: any[]): void;
  fatal(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.fatal(objOrMsg, msgOrArg, ...args);
  }

  child(context: LogContext): SBBLogger {
    const childPino = this.pino.child(context);
    return new SBBLoggerImpl(childPino);
  }

  /**
   * Tracks and outputs high-resolution performance benchmarks.
   */
  time(label: string): { end(): void } {
    const start = process.hrtime();
    return {
      end: () => {
        const diff = process.hrtime(start);
        // calculate duration in milliseconds
        const durationMs = (diff[0] * 1000 + diff[1] / 1e6).toFixed(3);
        this.info(
          { performance: { label, durationMs: parseFloat(durationMs) } },
          `Performance [${label}]: completed in ${durationMs}ms`
        );
      },
    };
  }
}
