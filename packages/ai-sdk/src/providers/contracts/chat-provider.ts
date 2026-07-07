import { AIProvider, ChatMessage } from './ai-provider.js';

export interface ChatProvider extends AIProvider {
  chat(messages: ChatMessage[], options?: Record<string, any>): Promise<any>;
  chatStream(messages: ChatMessage[], options?: Record<string, any>): AsyncIterable<any>;
}
