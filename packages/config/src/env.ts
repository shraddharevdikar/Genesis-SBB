import dotenv from 'dotenv';
import path from 'path';
import { envSchema, Env } from './schema.js';

/**
 * Loads and validates environment variables.
 * Automatically searches for .env files in the current directory and parent directories.
 */
export function loadEnv(customPath?: string): Env {
  // Load using default path or custom path
  const targetPath = customPath || path.resolve(process.cwd(), '.env');
  dotenv.config({ path: targetPath });

  // Fallback lookups in monorepo contexts
  if (!customPath) {
    dotenv.config({ path: path.resolve(process.cwd(), '../../.env') });
    dotenv.config({ path: path.resolve(process.cwd(), '../.env') });
  }

  // Parse against schema
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error('❌ [@sbb/config] Environment validation failed:');
    parsed.error.issues.forEach((err) => {
      console.error(`  - Env variable "${err.path.join('.')}": ${err.message}`);
    });
    throw new Error('SBB Platform: Invalid environment configuration variables');
  }

  return parsed.data;
}
