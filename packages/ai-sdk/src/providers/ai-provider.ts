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

export interface ChatProvider extends AIProvider {
  chat(messages: ChatMessage[], options?: Record<string, any>): Promise<any>;
  chatStream(messages: ChatMessage[], options?: Record<string, any>): AsyncIterable<any>;
}

export interface EmbeddingProvider extends AIProvider {
  embed(text: string | string[], options?: Record<string, any>): Promise<number[][]>;
}

export interface ImageProvider extends AIProvider {
  generateImage(prompt: string, options?: Record<string, any>): Promise<{ url: string; b64Data?: string }[]>;
}

export interface AudioProvider extends AIProvider {
  textToSpeech(text: string, options?: Record<string, any>): Promise<Buffer>;
  speechToText(audio: Buffer, options?: Record<string, any>): Promise<string>;
}
