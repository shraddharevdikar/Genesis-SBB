import { AIProvider } from './ai-provider.js';

export class ProviderRegistry {
  private readonly providers = new Map<string, AIProvider>();

  public register(provider: AIProvider): void {
    if (this.providers.has(provider.metadata.id)) {
      throw new Error(`Provider with id ${provider.metadata.id} is already registered.`);
    }
    this.providers.set(provider.metadata.id, provider);
  }

  public get(id: string): AIProvider | undefined {
    return this.providers.get(id);
  }

  public getRequired(id: string): AIProvider {
    const provider = this.get(id);
    if (!provider) {
      throw new Error(`Provider with id ${id} is not registered.`);
    }
    return provider;
  }

  public list(): AIProvider[] {
    return Array.from(this.providers.values());
  }

  public clear(): void {
    this.providers.clear();
  }
}
