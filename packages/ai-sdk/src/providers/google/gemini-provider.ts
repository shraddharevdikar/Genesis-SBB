import { ChatProvider } from '../contracts/chat-provider.js';
import { ReasoningProvider } from '../contracts/reasoning-provider.js';
import { EmbeddingProvider } from '../contracts/embedding-provider.js';
import { VisionProvider, VisionImage } from '../contracts/vision-provider.js';
import { ChatMessage, ProviderMetadata } from '../contracts/ai-provider.js';
import { ProviderCapability } from '../registry/provider-capability.js';
import { GeminiChat } from './gemini-chat.js';
import { GeminiReasoning } from './gemini-reasoning.js';
import { GeminiEmbeddings } from './gemini-embeddings.js';
import { GeminiVision } from './gemini-vision.js';
import { mapProviderError } from '../shared/provider-errors.js';

export class GeminiProvider implements ChatProvider, ReasoningProvider, EmbeddingProvider, VisionProvider {
  public readonly metadata: ProviderMetadata = {
    id: 'google-gemini',
    name: 'Google Gemini Provider',
    capabilities: [
      ProviderCapability.CHAT,
      ProviderCapability.REASONING,
      ProviderCapability.EMBEDDING,
      ProviderCapability.VISION,
    ],
  };

  private readonly chatDelegate: GeminiChat;
  private readonly reasoningDelegate: GeminiReasoning;
  private readonly embeddingDelegate: GeminiEmbeddings;
  private readonly visionDelegate: GeminiVision;

  constructor(apiKey?: string) {
    this.chatDelegate = new GeminiChat(apiKey);
    this.reasoningDelegate = new GeminiReasoning(apiKey);
    this.embeddingDelegate = new GeminiEmbeddings(apiKey);
    this.visionDelegate = new GeminiVision(apiKey);
  }

  public supports(capability: string | ProviderCapability): boolean {
    return this.metadata.capabilities.includes(capability as any);
  }

  public async chat(messages: ChatMessage[], options?: Record<string, any>): Promise<any> {
    try {
      return await this.chatDelegate.chat(messages, options);
    } catch (error) {
      throw mapProviderError(error, this.metadata.id);
    }
  }

  public async *chatStream(messages: ChatMessage[], options?: Record<string, any>): AsyncIterable<any> {
    try {
      yield* this.chatDelegate.chatStream(messages, options);
    } catch (error) {
      throw mapProviderError(error, this.metadata.id);
    }
  }

  public async reason(messages: ChatMessage[], options?: Record<string, any>): Promise<{ text: string; thinkingProcess?: string }> {
    try {
      return await this.reasoningDelegate.reason(messages, options);
    } catch (error) {
      throw mapProviderError(error, this.metadata.id);
    }
  }

  public async embed(text: string | string[], options?: Record<string, any>): Promise<number[][]> {
    try {
      return await this.embeddingDelegate.embed(text, options);
    } catch (error) {
      throw mapProviderError(error, this.metadata.id);
    }
  }

  public async analyzeImage(messages: ChatMessage[], images: VisionImage[], options?: Record<string, any>): Promise<any> {
    try {
      return await this.visionDelegate.analyzeImage(messages, images, options);
    } catch (error) {
      throw mapProviderError(error, this.metadata.id);
    }
  }
}
