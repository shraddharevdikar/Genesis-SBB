import { z } from 'zod';
import { SortDirection } from '@sbb/types';
import { dateTimeSchema } from '../common/index.js';

/**
 * Zod schema for validating pagination request parameters.
 */
export const paginationParamsSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(20),
  sortBy: z.string().optional(),
  sortDirection: z.nativeEnum(SortDirection).optional().default(SortDirection.ASC),
});

/**
 * Zod schema for validating pagination response metadata.
 */
export const paginationMetadataSchema = z.object({
  page: z.number().int().positive(),
  limit: z.number().int().positive(),
  totalCount: z.number().int().nonnegative(),
  totalPages: z.number().int().nonnegative(),
  hasNextPage: z.boolean(),
  hasPreviousPage: z.boolean(),
});

/**
 * Generic factory to generate a paginated response validation schema for any item schema.
 */
export function createApiPaginatedResponseSchema<T extends z.ZodTypeAny>(itemSchema: T) {
  return z.object({
    success: z.literal(true),
    data: z.array(itemSchema),
    pagination: paginationMetadataSchema,
    timestamp: dateTimeSchema,
  });
}

/**
 * Generic factory to generate a single resource API response envelope.
 */
export function createApiResponseSchema<T extends z.ZodTypeAny>(dataSchema: T) {
  return z.object({
    success: z.literal(true),
    data: dataSchema,
    timestamp: dateTimeSchema,
  });
}

/**
 * Zod schema for validating details about an API error.
 */
export const apiErrorDetailsSchema = z.object({
  code: z.string().min(1),
  message: z.string().min(1),
  field: z.string().optional(),
  helpUrl: z.string().url().optional(),
});

/**
 * Zod schema for validating the standard API error response envelope.
 */
export const apiErrorResponseSchema = z.object({
  success: z.literal(false),
  error: z.object({
    code: z.string().min(1),
    message: z.string().min(1),
    details: z.array(apiErrorDetailsSchema).optional(),
  }),
  timestamp: dateTimeSchema,
});
