import { z } from 'zod';
import { TenantStatus } from '@sbb/types';
import { 
  baseEntitySchema, 
  customMetadataSchema, 
  urlSchema, 
  dateTimeSchema 
} from '../common/index.js';

/**
 * Zod schema for validating tenant lifecycle status.
 */
export const tenantStatusSchema = z.nativeEnum(TenantStatus);

/**
 * Zod schema for tenant billing plans.
 */
export const tenantBillingPlanSchema = z.object({
  code: z.string().min(1, { message: 'Billing code is required' }),
  name: z.string().min(1, { message: 'Billing plan name is required' }),
  price: z.number().nonnegative(),
  currency: z.string().length(3, { message: 'Currency must be a 3-letter ISO code' }).toUpperCase(),
  interval: z.enum(['monthly', 'yearly']),
  trialEndsAt: dateTimeSchema.nullable().optional(),
});

/**
 * Zod schema for operational restrictions, resource caps, and geographic region filters.
 */
export const tenantSettingsSchema = z.object({
  maxUsers: z.number().int().positive(),
  storageLimitGb: z.number().int().positive(),
  enableBetaFeatures: z.boolean(),
  allowedRegions: z.array(z.string().min(1)),
  corsOrigins: z.array(z.string().min(1)),
});

/**
 * Zod schema for validating a complete Tenant.
 */
export const tenantSchema = baseEntitySchema.extend({
  name: z.string().min(1, { message: 'Tenant name is required' }).max(100),
  domain: z.string().min(1, { message: 'Domain is required' }),
  subdomain: z.string().min(1, { message: 'Subdomain is required' })
    .regex(/^[a-z0-9-]+$/, { message: 'Subdomain can only contain lowercase alphanumeric characters and dashes' }),
  status: tenantStatusSchema,
  billingPlan: tenantBillingPlanSchema,
  settings: tenantSettingsSchema,
  metadata: customMetadataSchema.optional(),
});
