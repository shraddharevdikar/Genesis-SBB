import { AIRequest } from '../gateway/ai-request.js';
import { AIResponse } from '../gateway/ai-response.js';

export interface AICache {
  get(request: AIRequest): Promise<AIResponse | undefined>;
  set(request: AIRequest, response: AIResponse, ttlSeconds?: number): Promise<void>;
  invalidate(request: AIRequest): Promise<void>;
  clear(): Promise<void>;
}

export class InMemoryAICache implements AICache {
  private readonly cache = new Map<string, { response: AIResponse; expiresAt: number }>();

  private generateKey(request: AIRequest): string {
    const serialized = JSON.stringify({
      prompt: request.prompt || '',
      messages: request.messages || [],
      model: request.requestedModel || '',
      provider: request.requestedProvider || '',
      temp: request.temperature ?? 0.7,
    });
    return serialized;
  }

  public async get(request: AIRequest): Promise<AIResponse | undefined> {
    if (request.bypassCache) return undefined;
    const key = this.generateKey(request);
    const entry = this.cache.get(key);
    if (!entry) return undefined;

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }

    return entry.response;
  }

  public async set(request: AIRequest, response: AIResponse, ttlSeconds = 300): Promise<void> {
    const key = this.generateKey(request);
    this.cache.set(key, {
      response,
      expiresAt: Date.now() + ttlSeconds * 1000,
    });
  }

  public async invalidate(request: AIRequest): Promise<void> {
    const key = this.generateKey(request);
    this.cache.delete(key);
  }

  public async clear(): Promise<void> {
    this.cache.clear();
  }
}
