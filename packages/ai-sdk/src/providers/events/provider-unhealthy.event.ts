import { ProviderHealth } from '../registry/provider-health.js';

export interface ProviderHealthChangedEvent {
  readonly eventType: 'provider.health_changed';
  readonly timestamp: Date;
  readonly providerId: string;
  readonly oldStatus: string;
  readonly newHealth: ProviderHealth;
}
