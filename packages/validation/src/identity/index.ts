import { z } from 'zod';
import { UserRole, UserStatus } from '@sbb/types';
import { 
  baseEntitySchema, 
  emailSchema, 
  urlSchema, 
  customMetadataSchema, 
  userIdSchema, 
  dateTimeSchema 
} from '../common/index.js';

/**
 * Zod schema for validating user roles.
 */
export const userRoleSchema = z.nativeEnum(UserRole);

/**
 * Zod schema for validating user status.
 */
export const userStatusSchema = z.nativeEnum(UserStatus);

/**
 * Zod schema for validating a complete enterprise user profile.
 */
export const userProfileSchema = baseEntitySchema.extend({
  email: emailSchema,
  firstName: z.string().min(1, { message: 'First name is required' }).max(50),
  lastName: z.string().min(1, { message: 'Last name is required' }).max(50),
  displayName: z.string().max(100).optional(),
  avatarUrl: urlSchema.nullable().optional(),
  phoneNumber: z.string().max(20).nullable().optional(),
  role: userRoleSchema,
  status: userStatusSchema,
  emailVerified: z.boolean(),
  mfaEnabled: z.boolean(),
  metadata: customMetadataSchema.optional(),
});

/**
 * Zod schema for validating a user session configuration.
 */
export const userSessionSchema = baseEntitySchema.extend({
  userId: userIdSchema,
  tokenHash: z.string().min(1, { message: 'Token hash is required' }),
  userAgent: z.string().max(500).nullable().optional(),
  ipAddress: z.string().nullable().optional(),
  expiresAt: dateTimeSchema,
  lastActiveAt: dateTimeSchema,
  isRevoked: z.boolean(),
});

/**
 * Zod schema for validating fine-grained permissions.
 */
export const userPermissionSchema = z.object({
  action: z.string().min(1, { message: 'Permission action is required' }),
  resource: z.string().min(1, { message: 'Permission resource is required' }),
  effect: z.enum(['allow', 'deny']),
  conditions: customMetadataSchema.optional(),
});
