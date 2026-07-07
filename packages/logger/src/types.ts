export enum LogLevel {
  TRACE = 'trace',
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal'
}

export interface LogContext {
  correlationId?: string;
  requestId?: string;
  tenantId?: string;
  userId?: string;
  module?: string;
  traceId?: string;
  spanId?: string;
  [key: string]: any;
}

export interface LoggerOptions {
  name: string;
  level?: LogLevel | string;
  redactPaths?: string[];
  pretty?: boolean; // If true, force pino-pretty. If false, force json. If undefined, determine based on NODE_ENV.
}

export interface StructuredLogger {
  trace(msg: string, context?: LogContext): void;
  debug(msg: string, context?: LogContext): void;
  info(msg: string, context?: LogContext): void;
  warn(msg: string, context?: LogContext): void;
  error(msg: string, error?: Error, context?: LogContext): void;
  fatal(msg: string, error?: Error, context?: LogContext): void;
  withContext(context: LogContext): StructuredLogger;
}

export interface SBBLogger {
  trace(msg: string, ...args: any[]): void;
  trace(obj: object, msg?: string, ...args: any[]): void;
  
  debug(msg: string, ...args: any[]): void;
  debug(obj: object, msg?: string, ...args: any[]): void;
  
  info(msg: string, ...args: any[]): void;
  info(obj: object, msg?: string, ...args: any[]): void;
  
  warn(msg: string, ...args: any[]): void;
  warn(obj: object, msg?: string, ...args: any[]): void;
  
  error(msg: string, ...args: any[]): void;
  error(obj: object, msg?: string, ...args: any[]): void;
  error(err: Error, msg?: string, ...args: any[]): void;
  
  fatal(msg: string, ...args: any[]): void;
  fatal(obj: object, msg?: string, ...args: any[]): void;
  fatal(err: Error, msg?: string, ...args: any[]): void;

  child(context: LogContext): SBBLogger;
  
  /**
   * Performance timing helper. Returns an object with an end() method that prints the duration.
   */
  time(label: string): { end(): void };
}
