import { ProviderCredentials } from '../configuration/provider-credentials.js';

export class GeminiEmbeddings {
  constructor(private readonly apiKey?: string) {}

  public async embed(text: string | string[], options?: Record<string, any>): Promise<number[][]> {
    const key = this.apiKey || ProviderCredentials.getApiKey('google-gemini');
    const texts = Array.isArray(text) ? text : [text];

    if (!key) {
      // Return dummy vectors for development/testing
      return texts.map(() => Array.from({ length: 1536 }, () => Math.random() * 2 - 1));
    }

    try {
      const endpoint = options?.endpoint || ProviderCredentials.getEndpoint('google-gemini') || 'https://generativelanguage.googleapis.com/v1beta/models';
      const model = options?.model || 'text-embedding-004';
      
      const results: number[][] = [];
      for (const t of texts) {
        const url = `${endpoint}/${model}:embedContent?key=${key}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: { parts: [{ text: t }] }
          }),
          signal: options?.signal,
        });

        if (!response.ok) {
          const textErr = await response.text();
          throw new Error(`Gemini Embedding API error (${response.status}): ${textErr}`);
        }

        const data = await response.json();
        if (data && data.embedding && data.embedding.values) {
          results.push(data.embedding.values);
        } else {
          results.push(Array.from({ length: 1536 }, () => 0));
        }
      }

      return results;
    } catch (error) {
      throw error;
    }
  }
}
