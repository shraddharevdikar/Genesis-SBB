import { ChatProvider, ChatMessage } from '../../providers/index.js';

export class MockChatProvider implements ChatProvider {
  public readonly metadata = {
    id: 'mock-provider',
    name: 'Mock Provider',
    capabilities: ['chat', 'reasoning', 'embedding', 'vision'],
  };

  constructor(private readonly responseText: string = 'Hello from Mock Provider!') {}

  public supports(capability: string): boolean {
    return this.metadata.capabilities.includes(capability);
  }

  public async chat(messages: ChatMessage[], options?: Record<string, any>): Promise<any> {
    return {
      content: this.responseText,
      usage: {
        promptTokens: 10,
        completionTokens: 20,
        totalTokens: 30,
      },
    };
  }

  public async *chatStream(messages: ChatMessage[], options?: Record<string, any>): AsyncIterable<any> {
    const words = this.responseText.split(' ');
    for (const word of words) {
      yield { text: word + ' ' };
    }
  }

  public async reason(messages: ChatMessage[], options?: Record<string, any>): Promise<any> {
    return {
      text: `[Reasoning] ${this.responseText}`,
      thinkingProcess: 'Mock thinking path...',
    };
  }

  public async embed(text: string | string[], options?: Record<string, any>): Promise<number[][]> {
    const texts = Array.isArray(text) ? text : [text];
    return texts.map(() => Array.from({ length: 1536 }, () => Math.random()));
  }

  public async analyzeImage(messages: ChatMessage[], images: any[], options?: Record<string, any>): Promise<any> {
    return {
      content: `[Vision] Analyzed image: ${this.responseText}`,
    };
  }
}
