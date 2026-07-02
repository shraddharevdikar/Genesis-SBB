import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Standard security and modification classifications.
 */
export enum AuditSeverity {
  INFO = 'info',
  WARNING = 'warning',
  CRITICAL = 'critical'
}

/**
 * Audit tracking entity mapping user and system behavior.
 */
export interface AuditTrailEntry extends BaseEntity {
  actor: ActorMetadata;
  action: string;             // e.g., 'user.login', 'tenant.deleted'
  category: string;           // e.g., 'authentication', 'administration'
  severity: AuditSeverity;
  resourceId?: string;        // e.g., user ID, tenant ID
  resourceType?: string;      // e.g., 'UserProfile', 'Tenant'
  ipAddress?: string | null;
  userAgent?: string | null;
  status: 'success' | 'failure';
  errorMessage?: string | null;
  changes?: FieldChange[];
  metadata?: CustomMetadata;
}

/**
 * Describes the initiator of an auditable action.
 */
export interface ActorMetadata {
  id: string;
  type: 'user' | 'system' | 'api_key' | 'support';
  email?: string;
  displayName?: string;
}

/**
 * Records exact structural properties changed during a database update or action.
 */
export interface FieldChange {
  field: string;
  oldValue: string | number | boolean | null;
  newValue: string | number | boolean | null;
}
