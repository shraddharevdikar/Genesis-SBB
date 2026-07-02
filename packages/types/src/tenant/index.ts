import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Operations and hosting states for a Tenant.
 */
export enum TenantStatus {
  PROVISIONING = 'provisioning',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  MAINTENANCE = 'maintenance',
  ARCHIVED = 'archived'
}

/**
 * Representation of a Tenant in a multi-tenant enterprise system.
 */
export interface Tenant extends BaseEntity {
  name: string;
  domain: string;
  subdomain: string;
  status: TenantStatus;
  billingPlan: TenantBillingPlan;
  settings: TenantSettings;
  metadata?: CustomMetadata;
}

/**
 * Billing features and utilization constraints for a tenant.
 */
export interface TenantBillingPlan {
  code: string;       // e.g., 'growth-monthly'
  name: string;       // e.g., 'Growth Monthly Plan'
  price: number;
  currency: string;
  interval: 'monthly' | 'yearly';
  trialEndsAt?: string | null;
}

/**
 * Technical boundaries, configurations, and feature flags for a specific tenant scope.
 */
export interface TenantSettings {
  maxUsers: number;
  storageLimitGb: number;
  enableBetaFeatures: boolean;
  allowedRegions: string[];
  corsOrigins: string[];
}
