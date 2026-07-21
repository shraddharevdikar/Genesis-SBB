export const AUTH_CONSTANTS = {
  DEFAULT_JWT_EXPIRATION: '3600s', // 1 hour
  DEFAULT_JWT_ALGORITHM: 'HS256',
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  TOKEN_BYTES: 32,
} as const;

export * from './auth.constants.js';

