import { ProviderRegistry } from '../registry/provider-registry.js';
import { ProviderHealth, ProviderHealthStatus } from '../registry/provider-health.js';

export interface ProviderHealthMonitor {
  checkHealth(providerId: string): Promise<ProviderHealth>;
  getHealthStatus(providerId: string): ProviderHealth;
  updateHealthStatus(providerId: string, health: ProviderHealth): void;
}

export class DefaultProviderHealthMonitor implements ProviderHealthMonitor {
  private readonly healthRecords = new Map<string, ProviderHealth>();

  constructor(private readonly registry: ProviderRegistry) {}

  public async checkHealth(providerId: string): Promise<ProviderHealth> {
    const descriptor = this.registry.getDescriptor(providerId);
    if (!descriptor) {
      throw new Error(`Cannot check health. Provider "${providerId}" is not registered.`);
    }

    const health: ProviderHealth = {
      status: descriptor.status,
      lastCheckedAt: new Date(),
      latencyMs: 15,
    };

    this.healthRecords.set(providerId, health);
    return health;
  }

  public getHealthStatus(providerId: string): ProviderHealth {
    const record = this.healthRecords.get(providerId);
    if (record) return record;

    const descriptor = this.registry.getDescriptor(providerId);
    if (!descriptor) {
      throw new Error(`Provider "${providerId}" is not registered.`);
    }

    return {
      status: descriptor.status,
      lastCheckedAt: new Date(),
    };
  }

  public updateHealthStatus(providerId: string, health: ProviderHealth): void {
    const descriptor = this.registry.getDescriptor(providerId);
    if (!descriptor) {
      throw new Error(`Cannot update health. Provider "${providerId}" is not registered.`);
    }
    this.healthRecords.set(providerId, health);
  }
}
