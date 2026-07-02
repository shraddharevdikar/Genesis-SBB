import { z } from 'zod';

/**
 * Reusable Zod schema for UUID validation.
 */
export const uuidSchema = z.string().uuid({ message: 'Invalid UUID format' });

/**
 * Reusable Zod schema for Email validation.
 */
export const emailSchema = z.string().email({ message: 'Invalid email address format' });

/**
 * Reusable Zod schema for URL validation.
 */
export const urlSchema = z.string().url({ message: 'Invalid URL format' });

/**
 * Reusable Zod schema for ISO 8601 Date/DateTime string validation.
 */
export const dateTimeSchema = z.string().datetime({ message: 'Invalid ISO 8601 DateTime format' });

/**
 * Reusable Zod schema for nullable or optional timestamps.
 */
export const nullableDateTimeSchema = dateTimeSchema.nullable().optional();

/**
 * Reusable Zod schema for UUID or prefixed custom identifier strings.
 */
export const idSchema = z.string().min(1, { message: 'Identifier cannot be empty' });

/**
 * User specific identifier.
 */
export const userIdSchema = idSchema;

/**
 * Tenant specific identifier.
 */
export const tenantIdSchema = idSchema;

/**
 * Organization specific identifier.
 */
export const organizationIdSchema = idSchema;

// Helper supporting recursive CustomMetadata definitions conforming to @sbb/types
export const jsonSchema: z.ZodType<any> = z.any();

/**
 * Reusable CustomMetadata schema.
 */
export const customMetadataSchema = z.record(z.string(), z.any());

/**
 * Zod schema representing standard Timestamped tracking fields.
 */
export const timestampedSchema = z.object({
  createdAt: dateTimeSchema,
  updatedAt: dateTimeSchema,
  deletedAt: nullableDateTimeSchema,
});

/**
 * Zod schema representing the standard BaseEntity structure.
 */
export const baseEntitySchema = timestampedSchema.extend({
  id: idSchema,
});

/**
 * Helper function to parse data using a schema. Throws error if invalid.
 */
export function validateOrThrow<T>(schema: z.Schema<T>, data: unknown): T {
  return schema.parse(data);
}

/**
 * Helper function to safely parse data returning a standard Zod safeParse result.
 */
export function safeValidate<T>(schema: z.Schema<T>, data: unknown) {
  return schema.safeParse(data);
}
