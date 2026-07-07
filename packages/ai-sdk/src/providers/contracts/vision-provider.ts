import { AIProvider, ChatMessage } from './ai-provider.js';

export interface VisionImage {
  readonly url?: string;
  readonly b64Data?: string;
  readonly mimeType?: string;
}

export interface VisionProvider extends AIProvider {
  analyzeImage(messages: ChatMessage[], images: VisionImage[], options?: Record<string, any>): Promise<any>;
}
