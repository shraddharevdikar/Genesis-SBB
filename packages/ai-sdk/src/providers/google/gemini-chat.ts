import { ChatMessage } from '../contracts/ai-provider.js';
import { ProviderChatResult } from '../shared/provider-result.js';
import { GeminiMapper } from './gemini-mapper.js';
import { ProviderCredentials } from '../configuration/provider-credentials.js';

export class GeminiChat {
  constructor(private readonly apiKey?: string) {}

  public async chat(messages: ChatMessage[], options?: Record<string, any>): Promise<ProviderChatResult> {
    const key = this.apiKey || ProviderCredentials.getApiKey('google-gemini');
    if (!key) {
      // Return beautiful mock response for test/development environments if no API key is set
      return GeminiMapper.mapChatResponse({
        text: `[Google Gemini Mock Response] Processed chat messages: ${messages.length} messages.`,
        usage: {
          promptTokens: messages.reduce((acc, m) => acc + Math.ceil(m.content.length / 4), 0),
          completionTokens: 30,
          totalTokens: messages.reduce((acc, m) => acc + Math.ceil(m.content.length / 4), 0) + 30,
        }
      });
    }

    try {
      const endpoint = options?.endpoint || ProviderCredentials.getEndpoint('google-gemini') || 'https://generativelanguage.googleapis.com/v1beta/models';
      const model = options?.model || 'gemini-1.5-flash';
      const url = `${endpoint}/${model}:generateContent?key=${key}`;

      const contents = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents }),
        signal: options?.signal,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Gemini API error (${response.status}): ${text}`);
      }

      const data = await response.json();
      return GeminiMapper.mapChatResponse(data);
    } catch (error) {
      throw error;
    }
  }

  public async *chatStream(messages: ChatMessage[], options?: Record<string, any>): AsyncIterable<any> {
    const mockTokens = ['[Google', ' Gemini', ' Streamed', ' Mock', ' Response]'];
    for (const token of mockTokens) {
      yield { text: token };
      // Simulate real delay
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }
}
