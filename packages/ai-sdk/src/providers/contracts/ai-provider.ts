export interface ProviderMetadata {
  readonly id: string;
  readonly name: string;
  readonly capabilities: string[];
}

export interface AIProvider {
  readonly metadata: ProviderMetadata;
  supports(capability: string): boolean;
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant' | 'tool' | string;
  content: string;
  name?: string;
}
