import { ProviderDescriptor } from '../registry/provider-descriptor.js';

export interface ProviderRegisteredEvent {
  readonly eventType: 'provider.registered';
  readonly timestamp: Date;
  readonly providerId: string;
  readonly descriptor: ProviderDescriptor;
}
