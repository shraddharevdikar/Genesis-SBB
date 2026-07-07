import { AIProvider } from './ai-provider.js';

export interface EmbeddingProvider extends AIProvider {
  embed(text: string | string[], options?: Record<string, any>): Promise<number[][]>;
}
