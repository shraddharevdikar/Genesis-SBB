import { ChatProvider } from '../contracts/chat-provider.js';
import { ReasoningProvider } from '../contracts/reasoning-provider.js';
import { EmbeddingProvider } from '../contracts/embedding-provider.js';
import { VisionProvider, VisionImage } from '../contracts/vision-provider.js';
import { ChatMessage, ProviderMetadata } from '../contracts/ai-provider.js';
import { ProviderCapability } from '../registry/provider-capability.js';
import { OpenAIChat } from './openai-chat.js';
import { OpenAIReasoning } from './openai-reasoning.js';
import { OpenAIEmbeddings } from './openai-embeddings.js';
import { OpenAIVision } from './openai-vision.js';
import { mapProviderError } from '../shared/provider-errors.js';

export class OpenAIProvider implements ChatProvider, ReasoningProvider, EmbeddingProvider, VisionProvider {
  public readonly metadata: ProviderMetadata = {
    id: 'openai',
    name: 'OpenAI Provider',
    capabilities: [
      ProviderCapability.CHAT,
      ProviderCapability.REASONING,
      ProviderCapability.EMBEDDING,
      ProviderCapability.VISION,
    ],
  };

  private readonly chatDelegate: OpenAIChat;
  private readonly reasoningDelegate: OpenAIReasoning;
  private readonly embeddingDelegate: OpenAIEmbeddings;
  private readonly visionDelegate: OpenAIVision;

  constructor(apiKey?: string) {
    this.chatDelegate = new OpenAIChat(apiKey);
    this.reasoningDelegate = new OpenAIReasoning(apiKey);
    this.embeddingDelegate = new OpenAIEmbeddings(apiKey);
    this.visionDelegate = new OpenAIVision(apiKey);
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
