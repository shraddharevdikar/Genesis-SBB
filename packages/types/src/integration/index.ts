import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Supported external platforms.
 */
export enum IntegrationType {
  SLACK = 'slack',
  GMAIL = 'gmail',
  GOOGLE_CALENDAR = 'google_calendar',
  GITHUB = 'github',
  STRIPE = 'stripe',
  SALESFORCE = 'salesforce',
  CUSTOM_WEBHOOK = 'custom_webhook'
}

/**
 * Connection states for an integration.
 */
export enum IntegrationState {
  DISCONNECTED = 'disconnected',
  CONNECTED = 'connected',
  ERROR = 'error',
  PAUSED = 'paused'
}

/**
 * Tracks third-party platform credentials, scopes, and connection configurations.
 */
export interface IntegrationConfig extends BaseEntity {
  tenantId: string;
  type: IntegrationType;
  state: IntegrationState;
  authMethod: 'oauth2' | 'api_key' | 'basic' | 'none';
  scopes?: string[];
  settings: CustomMetadata;
  lastSyncedAt?: string | null;
}

/**
 * Custom incoming or outgoing HTTP webhook endpoint rules.
 */
export interface WebhookConfig extends BaseEntity {
  integrationId?: string;
  url: string;
  events: string[];           // e.g., ['document.created', 'user.signed_up']
  secretToken: string;        // Used to compute HMAC signature for safety
  isActive: boolean;
  retryAttempts: number;
}

/**
 * Operational diagnostics record tracking data synchronization success rates.
 */
export interface IntegrationSyncStatus {
  id: string;
  integrationId: string;
  status: 'completed' | 'failed' | 'partial';
  recordsProcessed: number;
  recordsFailed: number;
  durationMs: number;
  errorMessage?: string | null;
  startedAt: string;
  completedAt: string;
}
