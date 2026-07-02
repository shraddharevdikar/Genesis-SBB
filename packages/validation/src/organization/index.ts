import { z } from 'zod';
import { SubscriptionTier, UserRole } from '@sbb/types';
import { 
  baseEntitySchema, 
  emailSchema, 
  urlSchema, 
  customMetadataSchema, 
  userIdSchema, 
  organizationIdSchema, 
  dateTimeSchema 
} from '../common/index.js';

/**
 * Zod schema for validating subscription tiers.
 */
export const subscriptionTierSchema = z.nativeEnum(SubscriptionTier);

/**
 * Zod schema for organization settings.
 */
export const organizationSettingsSchema = z.object({
  allowedDomains: z.array(z.string().min(1)).optional(),
  mfaRequired: z.boolean(),
  ssoEnabled: z.boolean(),
  ssoProvider: z.string().optional(),
  sessionTimeoutMinutes: z.number().int().positive().default(60),
});

/**
 * Zod schema for representing a complete Organization workspace context.
 */
export const organizationSchema = baseEntitySchema.extend({
  name: z.string().min(1, { message: 'Organization name is required' }).max(100),
  slug: z.string().min(1, { message: 'Organization slug is required' })
    .regex(/^[a-z0-9-_]+$/, { message: 'Slug can only contain lowercase letters, numbers, dashes, and underscores' }),
  subscriptionTier: subscriptionTierSchema,
  billingEmail: emailSchema,
  logoUrl: urlSchema.nullable().optional(),
  settings: organizationSettingsSchema,
  metadata: customMetadataSchema.optional(),
});

/**
 * Zod schema for representing user-organization membership association mapping.
 */
export const organizationMemberSchema = baseEntitySchema.extend({
  organizationId: organizationIdSchema,
  userId: userIdSchema,
  role: z.nativeEnum(UserRole),
  joinedAt: dateTimeSchema,
  invitedBy: userIdSchema.optional(),
});
