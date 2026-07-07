import { AIProvider } from '../contracts/ai-provider.js';
import { ProviderDescriptor } from './provider-descriptor.js';
import { ProviderCapability } from './provider-capability.js';

export class ProviderRegistry {
  private readonly providers = new Map<string, { provider: AIProvider; descriptor: ProviderDescriptor }>();

  public register(provider: AIProvider, descriptor: ProviderDescriptor): void {
    if (this.providers.has(descriptor.providerId)) {
      throw new Error(`Provider with ID "${descriptor.providerId}" is already registered.`);
    }
    this.providers.set(descriptor.providerId, { provider, descriptor });
  }

  public remove(providerId: string): boolean {
    return this.providers.delete(providerId);
  }

  public get(providerId: string): AIProvider | undefined {
    return this.providers.get(providerId)?.provider;
  }

  public getDescriptor(providerId: string): ProviderDescriptor | undefined {
    return this.providers.get(providerId)?.descriptor;
  }

  public getRequired(providerId: string): AIProvider {
    const entry = this.providers.get(providerId);
    if (!entry) {
      throw new Error(`Required provider with ID "${providerId}" is not registered.`);
    }
    return entry.provider;
  }

  public list(): AIProvider[] {
    return Array.from(this.providers.values()).map(e => e.provider);
  }

  public listDescriptors(): ProviderDescriptor[] {
    return Array.from(this.providers.values()).map(e => e.descriptor);
  }

  public findByCapability(capability: ProviderCapability | string): AIProvider[] {
    return Array.from(this.providers.values())
      .filter(e => e.descriptor.capabilities.includes(capability))
      .map(e => e.provider);
  }

  public findDescriptorsByCapability(capability: ProviderCapability | string): ProviderDescriptor[] {
    return Array.from(this.providers.values())
      .filter(e => e.descriptor.capabilities.includes(capability))
      .map(e => e.descriptor);
  }

  public clear(): void {
    this.providers.clear();
  }
}
