export interface ProviderConfiguration {
  readonly providerId: string;
  readonly apiKey?: string;
  readonly endpoint?: string;
  readonly region?: string;
  readonly timeout?: number;
  readonly options?: Record<string, any>;
}

export interface ProviderConfigRegistry {
  getConfiguration(providerId: string): ProviderConfiguration | undefined;
}
