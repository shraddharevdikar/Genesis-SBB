import { z } from 'zod';
import { AuditSeverity } from '@sbb/types';
import { 
  baseEntitySchema, 
  customMetadataSchema, 
  emailSchema 
} from '../common/index.js';

/**
 * Zod schema for validating audit event severity rankings.
 */
export const auditSeveritySchema = z.nativeEnum(AuditSeverity);

/**
 * Zod schema for describing the initiator/actor of an auditable behavior.
 */
export const actorMetadataSchema = z.object({
  id: z.string().min(1, { message: 'Actor ID is required' }),
  type: z.enum(['user', 'system', 'api_key', 'support']),
  email: emailSchema.optional(),
  displayName: z.string().optional(),
});

/**
 * Zod schema representing individual property updates.
 */
export const fieldChangeSchema = z.object({
  field: z.string().min(1, { message: 'Modified field path is required' }),
  oldValue: z.union([z.string(), z.number(), z.boolean(), z.null()]),
  newValue: z.union([z.string(), z.number(), z.boolean(), z.null()]),
});

/**
 * Zod schema representing complete system or user Audit logs.
 */
export const auditTrailEntrySchema = baseEntitySchema.extend({
  actor: actorMetadataSchema,
  action: z.string().min(1, { message: 'Audit action description is required' }),
  category: z.string().min(1, { message: 'Audit category is required' }),
  severity: auditSeveritySchema,
  resourceId: z.string().optional(),
  resourceType: z.string().optional(),
  ipAddress: z.string().nullable().optional(),
  userAgent: z.string().max(500).nullable().optional(),
  status: z.enum(['success', 'failure']),
  errorMessage: z.string().nullable().optional(),
  changes: z.array(fieldChangeSchema).optional(),
  metadata: customMetadataSchema.optional(),
});
