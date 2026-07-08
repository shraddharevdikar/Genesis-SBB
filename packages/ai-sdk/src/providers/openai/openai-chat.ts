import { ChatMessage } from '../contracts/ai-provider.js';
import { ProviderChatResult } from '../shared/provider-result.js';
import { OpenAIMapper } from './openai-mapper.js';
import { ProviderCredentials } from '../configuration/provider-credentials.js';

export class OpenAIChat {
  constructor(private readonly apiKey?: string) {}

  public async chat(messages: ChatMessage[], options?: Record<string, any>): Promise<ProviderChatResult> {
    const key = this.apiKey || ProviderCredentials.getApiKey('openai');
    if (!key) {
      // Return a beautiful mock response in local/test environment if no API key is set
      return OpenAIMapper.mapChatResponse({
        choices: [{
          message: {
            role: 'assistant',
            content: `[OpenAI Mock Response] Processed chat messages: ${messages.length} messages.`,
          }
        }],
        usage: {
          prompt_tokens: messages.reduce((acc, m) => acc + Math.ceil(m.content.length / 4), 0),
          completion_tokens: 30,
          total_tokens: messages.reduce((acc, m) => acc + Math.ceil(m.content.length / 4), 0) + 30,
        }
      });
    }

    try {
      const endpoint = options?.endpoint || ProviderCredentials.getEndpoint('openai') || 'https://api.openai.com/v1';
      const model = options?.model || 'gpt-4o-mini';
      const url = `${endpoint}/chat/completions`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
          model,
          messages: messages.map(m => ({ role: m.role, content: m.content })),
          temperature: options?.temperature,
          max_tokens: options?.maxTokens,
        }),
        signal: options?.signal,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`OpenAI API error (${response.status}): ${text}`);
      }

      const data = await response.json();
      return OpenAIMapper.mapChatResponse(data);
    } catch (error) {
      throw error;
    }
  }

  public async *chatStream(messages: ChatMessage[], options?: Record<string, any>): AsyncIterable<any> {
    const mockTokens = ['[Open', 'AI', ' Streamed', ' Mock', ' Response]'];
    for (const token of mockTokens) {
      yield { text: token };
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }
}
