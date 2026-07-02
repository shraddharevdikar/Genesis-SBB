import { z } from 'zod';
import { IntegrationType, IntegrationState } from '@sbb/types';
import { 
  baseEntitySchema, 
  customMetadataSchema, 
  tenantIdSchema, 
  dateTimeSchema, 
  urlSchema 
} from '../common/index.js';

/**
 * Zod schema for external connection types.
 */
export const integrationTypeSchema = z.nativeEnum(IntegrationType);

/**
 * Zod schema for tracking connector status states.
 */
export const integrationStateSchema = z.nativeEnum(IntegrationState);

/**
 * Zod schema for third-party connector configuration metadata.
 */
export const integrationConfigSchema = baseEntitySchema.extend({
  tenantId: tenantIdSchema,
  type: integrationTypeSchema,
  state: integrationStateSchema,
  authMethod: z.enum(['oauth2', 'api_key', 'basic', 'none']),
  scopes: z.array(z.string()).optional(),
  settings: customMetadataSchema,
  lastSyncedAt: dateTimeSchema.nullable().optional(),
});

/**
 * Zod schema for outgoing HTTP webhook rules and security secret configurations.
 */
export const webhookConfigSchema = baseEntitySchema.extend({
  integrationId: z.string().optional(),
  url: urlSchema,
  events: z.array(z.string().min(1)).min(1, { message: 'Must subscribe to at least one event type' }),
  secretToken: z.string().min(16, { message: 'Secret token must be at least 16 characters for HMAC validation' }),
  isActive: z.boolean(),
  retryAttempts: z.number().int().nonnegative().max(10).default(3),
});

/**
 * Zod schema for monitoring and logging historical sync run outputs.
 */
export const integrationSyncStatusSchema = z.object({
  id: z.string().min(1, { message: 'Sync status ID is required' }),
  integrationId: z.string().min(1, { message: 'Integration ID is required' }),
  status: z.enum(['completed', 'failed', 'partial']),
  recordsProcessed: z.number().int().nonnegative(),
  recordsFailed: z.number().int().nonnegative(),
  durationMs: z.number().int().nonnegative(),
  errorMessage: z.string().nullable().optional(),
  startedAt: dateTimeSchema,
  completedAt: dateTimeSchema,
});
