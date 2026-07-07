import { LogLevel } from './types.js';

export const DEFAULT_LOG_LEVEL: LogLevel = LogLevel.INFO;

export const DEFAULT_LOGGER_NAME = 'sbb-platform';

export const DEFAULT_REDACT_PATHS = [
  'password',
  '*.password',
  'passwordConfirm',
  'token',
  '*.token',
  'accessToken',
  '*.accessToken',
  'refreshToken',
  '*.refreshToken',
  'secret',
  '*.secret',
  'authorization',
  '*.authorization',
  'cookie',
  '*.cookie',
  'creditCard',
  '*.creditCard',
  'ssn',
  '*.ssn',
];
