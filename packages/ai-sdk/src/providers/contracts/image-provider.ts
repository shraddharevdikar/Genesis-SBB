import { AIProvider } from './ai-provider.js';

export interface ImageProvider extends AIProvider {
  generateImage(prompt: string, options?: Record<string, any>): Promise<{ url: string; b64Data?: string }[]>;
}
