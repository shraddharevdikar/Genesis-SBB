export interface DatabaseConfig {
  url: string;
  maxConnections: number;
}

export interface RedisConfig {
  url: string;
}

export interface SecurityConfig {
  jwtSecret: string;
  jwtAccessExpiration: string;
  jwtRefreshExpiration: string;
}

export interface EmailConfig {
  smtpHost?: string;
  smtpPort: number;
  from?: string;
}

export interface StorageConfig {
  provider: 'local' | 's3' | 'gcs';
  bucketName?: string;
}

export interface AIConfig {
  geminiApiKey?: string;
  openaiApiKey?: string;
}

export interface FeatureFlags {
  enableMfa: boolean;
  enableOauth: boolean;
  enablePasskeys: boolean;
  enableAlphaFeatures: boolean;
}

export interface SBBConfig {
  env: 'development' | 'test' | 'production';
  port: number;
  db: DatabaseConfig;
  redis: RedisConfig;
  security: SecurityConfig;
  email: EmailConfig;
  storage: StorageConfig;
  ai: AIConfig;
  features: FeatureFlags;
}
