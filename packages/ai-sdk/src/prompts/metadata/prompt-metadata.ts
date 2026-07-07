export interface PromptMetadata {
  readonly owner: string;
  readonly team: string;
  readonly module: string;
  readonly tags: string[];
  readonly createdAt: Date | string;
  readonly updatedAt: Date | string;
  readonly supportedProviders: string[]; // e.g. ['google-gemini', 'openai']
  readonly supportedCapabilities: string[]; // e.g. ['chat', 'reasoning']
  readonly tenantId?: string;
}
