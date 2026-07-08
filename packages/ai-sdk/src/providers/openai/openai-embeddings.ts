import { ProviderCredentials } from '../configuration/provider-credentials.js';

export class OpenAIEmbeddings {
  constructor(private readonly apiKey?: string) {}

  public async embed(text: string | string[], options?: Record<string, any>): Promise<number[][]> {
    const key = this.apiKey || ProviderCredentials.getApiKey('openai');
    const texts = Array.isArray(text) ? text : [text];

    if (!key) {
      // Return dummy vectors for development/testing
      return texts.map(() => Array.from({ length: 1536 }, () => Math.random() * 2 - 1));
    }

    try {
      const endpoint = options?.endpoint || ProviderCredentials.getEndpoint('openai') || 'https://api.openai.com/v1';
      const model = options?.model || 'text-embedding-3-small';
      const url = `${endpoint}/embeddings`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
          model,
          input: texts,
        }),
        signal: options?.signal,
      });

      if (!response.ok) {
        const textErr = await response.text();
        throw new Error(`OpenAI Embedding API error (${response.status}): ${textErr}`);
      }

      const data = await response.json();
      if (data && data.data) {
        return data.data.map((item: any) => item.embedding);
      } else {
        return texts.map(() => Array.from({ length: 1536 }, () => 0));
      }
    } catch (error) {
      throw error;
    }
  }
}
