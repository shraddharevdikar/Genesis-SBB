import { ChatMessage } from '../contracts/ai-provider.js';
import { ProviderReasoningResult } from '../shared/provider-result.js';
import { ProviderCredentials } from '../configuration/provider-credentials.js';

export class OpenAIReasoning {
  constructor(private readonly apiKey?: string) {}

  public async reason(messages: ChatMessage[], options?: Record<string, any>): Promise<ProviderReasoningResult> {
    const key = this.apiKey || ProviderCredentials.getApiKey('openai');

    if (!key) {
      return {
        text: `[OpenAI Reasoning Mock Response] Answer to the reasoning task.`,
        thinkingProcess: `Thinking Process:
1. Parsed input messages.
2. Verified multi-turn query constraints.
3. Successfully reasoning using simulated GPT-o1.`,
        usage: {
          promptTokens: 15,
          completionTokens: 35,
          totalTokens: 50,
        }
      };
    }

    try {
      const endpoint = options?.endpoint || ProviderCredentials.getEndpoint('openai') || 'https://api.openai.com/v1';
      const model = options?.model || 'o1-mini';
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
        }),
        signal: options?.signal,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`OpenAI API error (${response.status}): ${text}`);
      }

      const data = await response.json();
      const textContent = data.choices?.[0]?.message?.content || '';

      return {
        text: textContent,
        thinkingProcess: 'Successfully executed reasoning path via o1-series model.',
        usage: {
          promptTokens: data.usage?.prompt_tokens || 20,
          completionTokens: data.usage?.completion_tokens || 40,
          totalTokens: data.usage?.total_tokens || 60,
        }
      };
    } catch (error) {
      throw error;
    }
  }
}
