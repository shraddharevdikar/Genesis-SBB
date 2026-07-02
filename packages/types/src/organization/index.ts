import { BaseEntity, CustomMetadata } from '../common/index.js';
import { UserRole } from '../identity/index.js';

/**
 * Organization level subscription tiers.
 */
export enum SubscriptionTier {
  FREE = 'free',
  GROWTH = 'growth',
  ENTERPRISE = 'enterprise'
}

/**
 * Representation of an Organization (or workspace) inside SBB.
 */
export interface Organization extends BaseEntity {
  name: string;
  slug: string;
  subscriptionTier: SubscriptionTier;
  billingEmail: string;
  logoUrl?: string | null;
  settings: OrganizationSettings;
  metadata?: CustomMetadata;
}

/**
 * Global configuration properties specific to the Organization context.
 */
export interface OrganizationSettings {
  allowedDomains?: string[];
  mfaRequired: boolean;
  ssoEnabled: boolean;
  ssoProvider?: string;
  sessionTimeoutMinutes: number;
}

/**
 * Represents a user's association with a specific Organization.
 */
export interface OrganizationMember extends BaseEntity {
  organizationId: string;
  userId: string;
  role: UserRole;
  joinedAt: string;
  invitedBy?: string;
}
