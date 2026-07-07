import { AIProvider, ChatMessage } from './ai-provider.js';

export interface ReasoningProvider extends AIProvider {
  reason(messages: ChatMessage[], options?: Record<string, any>): Promise<{ text: string; thinkingProcess?: string }>;
}
