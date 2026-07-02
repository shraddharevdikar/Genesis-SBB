import { Env } from './schema.js';
import { SBBConfig } from './types.js';
import { loadEnv } from './env.js';

/**
 * Transforms flat validated environment variables into a structured, typed configuration tree.
 */
export function createConfig(env: Env): SBBConfig {
  return {
    env: env.NODE_ENV,
    port: env.PORT,
    db: {
      url: env.DATABASE_URL,
      maxConnections: env.DATABASE_MAX_CONNECTIONS,
    },
    redis: {
      url: env.REDIS_URL,
    },
    security: {
      jwtSecret: env.JWT_SECRET,
      jwtAccessExpiration: env.JWT_ACCESS_EXPIRATION,
      jwtRefreshExpiration: env.JWT_REFRESH_EXPIRATION,
    },
    email: {
      smtpHost: env.EMAIL_SMTP_HOST,
      smtpPort: env.EMAIL_SMTP_PORT,
      from: env.EMAIL_FROM,
    },
    storage: {
      provider: env.STORAGE_PROVIDER,
      bucketName: env.STORAGE_BUCKET_NAME,
    },
    ai: {
      geminiApiKey: env.GEMINI_API_KEY,
      openaiApiKey: env.OPENAI_API_KEY,
    },
    features: {
      enableMfa: env.ENABLE_MFA,
      enableOauth: env.ENABLE_OAUTH,
      enablePasskeys: env.ENABLE_PASSKEYS,
      enableAlphaFeatures: env.ENABLE_ALPHA_FEATURES,
    },
  };
}

let cachedConfig: SBBConfig | null = null;

/**
 * Retrieves the global configuration object. 
 * Lazy initializes it by loading and validating the environment if cached version doesn't exist.
 */
export function getConfig(customPath?: string): SBBConfig {
  if (!cachedConfig) {
    const env = loadEnv(customPath);
    cachedConfig = createConfig(env);
  }
  return cachedConfig;
}

/**
 * Invalidates the configuration cache. Highly useful to reload settings dynamically during tests.
 */
export function resetConfig(): void {
  cachedConfig = null;
}
