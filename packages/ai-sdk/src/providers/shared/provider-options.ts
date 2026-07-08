export interface ProviderOptions {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  timeout?: number;
  region?: string;
  endpoint?: string;
}

export const DEFAULT_PROVIDER_OPTIONS: ProviderOptions = {
  temperature: 0.7,
  maxTokens: 1024,
  timeout: 30000,
};
