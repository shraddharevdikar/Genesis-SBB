export const AUTH_CONFIG = {
  JWT_SECRET: process.env.JWT_SECRET || 'genesis-sbb-super-secret-key-change-in-prod',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '15m', // 15 mins for access token
  REFRESH_JWT_SECRET: process.env.REFRESH_JWT_SECRET || 'genesis-sbb-refresh-super-secret-key-change-in-prod',
  REFRESH_JWT_EXPIRATION: process.env.REFRESH_JWT_EXPIRATION || '7d', // 7 days for refresh token
  PASSWORD_RESET_EXPIRATION_MS: 3600000, // 1 hour in ms
};

export const IS_PUBLIC_KEY = 'isPublic';
