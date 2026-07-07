import { AIProvider } from '../contracts/ai-provider.js';

export interface ProviderConfig {
  readonly providerId: string;
  readonly apiKey?: string;
  readonly endpoint?: string;
  readonly options?: Record<string, any>;
}

export type ProviderCreator = (config: ProviderConfig) => AIProvider;

export class ProviderFactory {
  private static readonly creators = new Map<string, ProviderCreator>();

  public static registerCreator(
    providerId: string,
    creator: ProviderCreator
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

  public static clear(): void {
    this.creators.clear();
  }
}
