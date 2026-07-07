import { AIProvider } from './ai-provider.js';

export interface ProviderConfig {
  providerId: string;
  apiKey?: string;
  endpoint?: string;
  options?: Record<string, any>;
}

export class ProviderFactory {
  private static readonly creators = new Map<string, (config: ProviderConfig) => AIProvider>();

  public static registerCreator(
    providerId: string,
    creator: (config: ProviderConfig) => AIProvider
  ): void {
    this.creators.set(providerId, creator);
  }

  public static create(config: ProviderConfig): AIProvider {
    const creator = this.creators.get(config.providerId);
    if (!creator) {
      throw new Error(`No provider creator registered for providerId: ${config.providerId}`);
    }
    return creator(config);
  }
}
