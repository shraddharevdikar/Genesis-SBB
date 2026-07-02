import { z } from 'zod';

// Helper to preprocess boolean environment variables from strings
const stringToBoolean = z.preprocess((val) => {
  if (typeof val === 'string') {
    if (val.toLowerCase() === 'true' || val === '1') return true;
    if (val.toLowerCase() === 'false' || val === '0') return false;
  }
  return val;
}, z.boolean().default(false));

export const envSchema = z.object({
  // Environment Mode
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.preprocess((val) => (val ? Number(val) : 3000), z.number().default(3000)),

  // Database Configurations
  DATABASE_URL: z.string().optional().default('postgresql://localhost:5432/sbb_db'),
  DATABASE_MAX_CONNECTIONS: z.preprocess((val) => (val ? Number(val) : 10), z.number().default(10)),

  // Redis configurations
  REDIS_URL: z.string().optional().default('redis://localhost:6379'),

  // JWT Security Configurations
  JWT_SECRET: z.string().default('sbb-platform-default-super-secret-key-2026'),
  JWT_ACCESS_EXPIRATION: z.string().default('15m'),
  JWT_REFRESH_EXPIRATION: z.string().default('7d'),

  // Email Configuration Placeholders
  EMAIL_SMTP_HOST: z.string().optional().default('smtp.sbb-platform.com'),
  EMAIL_SMTP_PORT: z.preprocess((val) => (val ? Number(val) : 587), z.number().default(587)),
  EMAIL_FROM: z.string().optional().default('noreply@sbb-platform.com'),

  // Storage Configuration Placeholders
  STORAGE_PROVIDER: z.enum(['local', 's3', 'gcs']).default('local'),
  STORAGE_BUCKET_NAME: z.string().optional().default('sbb-core-assets'),

  // AI Provider Configurations (Placeholders)
  GEMINI_API_KEY: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),

  // Feature Flags
  ENABLE_MFA: stringToBoolean,
  ENABLE_OAUTH: stringToBoolean,
  ENABLE_PASSKEYS: stringToBoolean,
  ENABLE_ALPHA_FEATURES: stringToBoolean,
});

export type Env = z.infer<typeof envSchema>;
