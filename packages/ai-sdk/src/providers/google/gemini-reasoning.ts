import { ChatMessage } from '../contracts/ai-provider.js';
import { ProviderReasoningResult } from '../shared/provider-result.js';
import { ProviderCredentials } from '../configuration/provider-credentials.js';

export class GeminiReasoning {
  constructor(private readonly apiKey?: string) {}

  public async reason(messages: ChatMessage[], options?: Record<string, any>): Promise<ProviderReasoningResult> {
    const key = this.apiKey || ProviderCredentials.getApiKey('google-gemini');
    
    // In test/development mode or without key, return mock reasoning structure
    if (!key) {
      return {
        text: `[Google Gemini Reasoning Mock Response] Answer to query.`,
        thinkingProcess: `Thinking Process:
1. Parsed ${messages.length} messages.
2. Formulated deep analytical breakdown.
3. Concluded best response path.`,
        usage: {
          promptTokens: 15,
          completionTokens: 40,
          totalTokens: 55,
        }
      };
    }

    try {
      // In a real environment, you might request the thinking/reasoning config or map it from a higher reasoning model
      const endpoint = options?.endpoint || ProviderCredentials.getEndpoint('google-gemini') || 'https://generativelanguage.googleapis.com/v1beta/models';
      const model = options?.model || 'gemini-1.5-pro';
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
      let textContent = '';
      if (data && data.candidates && data.candidates[0]) {
        const candidate = data.candidates[0];
        if (candidate.content && candidate.content.parts && candidate.content.parts[0]) {
          textContent = candidate.content.parts[0].text || '';
        }
      }

      return {
        text: textContent,
        thinkingProcess: 'Successfully executed reasoning path.',
        usage: {
          promptTokens: data.usageMetadata?.promptTokenCount || 20,
          completionTokens: data.usageMetadata?.candidatesTokenCount || 40,
          totalTokens: data.usageMetadata?.totalTokenCount || 60,
        }
      };
    } catch (error) {
      throw error;
    }
  }
}
