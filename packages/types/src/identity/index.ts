import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Standard platform user roles.
 */
export enum UserRole {
  OWNER = 'owner',
  ADMIN = 'admin',
  MEMBER = 'member',
  VIEWER = 'viewer',
  GUEST = 'guest'
}

/**
 * Statuses representing a user's lifecycle state in the platform.
 */
export enum UserStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  PENDING_INVITATION = 'pending_invitation',
  DEACTIVATED = 'deactivated'
}

/**
 * Enterprise user profile details.
 */
export interface UserProfile extends BaseEntity {
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  avatarUrl?: string | null;
  phoneNumber?: string | null;
  role: UserRole;
  status: UserStatus;
  emailVerified: boolean;
  mfaEnabled: boolean;
  metadata?: CustomMetadata;
}

/**
 * Metadata for tracking a logged-in user's device and session.
 */
export interface UserSession extends BaseEntity {
  userId: string;
  tokenHash: string;
  userAgent?: string | null;
  ipAddress?: string | null;
  expiresAt: string;
  lastActiveAt: string;
  isRevoked: boolean;
}

/**
 * Authorization permission structure for fine-grained access controls.
 */
export interface UserPermission {
  action: string;      // e.g., 'read', 'write', 'delete'
  resource: string;    // e.g., 'documents', 'billing', 'settings'
  effect: 'allow' | 'deny';
  conditions?: CustomMetadata;
}
