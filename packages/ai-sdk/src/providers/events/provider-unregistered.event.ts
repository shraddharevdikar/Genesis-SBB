export interface ProviderUnregisteredEvent {
  readonly eventType: 'provider.unregistered';
  readonly timestamp: Date;
  readonly providerId: string;
}
