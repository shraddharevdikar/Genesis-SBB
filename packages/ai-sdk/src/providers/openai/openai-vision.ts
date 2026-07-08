import { ChatMessage } from '../contracts/ai-provider.js';
import { VisionImage } from '../contracts/vision-provider.js';
import { ProviderVisionResult } from '../shared/provider-result.js';
import { ProviderCredentials } from '../configuration/provider-credentials.js';

export class OpenAIVision {
  constructor(private readonly apiKey?: string) {}

  public async analyzeImage(
    messages: ChatMessage[],
    images: VisionImage[],
    options?: Record<string, any>
  ): Promise<ProviderVisionResult> {
    const key = this.apiKey || ProviderCredentials.getApiKey('openai');

    if (!key) {
      return {
        content: `[OpenAI Vision Mock Response] Analyzed ${images.length} images successfully.`,
        usage: {
          promptTokens: 50 + messages.reduce((acc, m) => acc + Math.ceil(m.content.length / 4), 0),
          completionTokens: 25,
          totalTokens: 75 + messages.reduce((acc, m) => acc + Math.ceil(m.content.length / 4), 0),
        }
      };
    }

    try {
      const endpoint = options?.endpoint || ProviderCredentials.getEndpoint('openai') || 'https://api.openai.com/v1';
      const model = options?.model || 'gpt-4o';
      const url = `${endpoint}/chat/completions`;

      // Structure content parts
      const contentParts: any[] = [];
      for (const msg of messages) {
        contentParts.push({ type: 'text', text: msg.content });
      }

      for (const img of images) {
        if (img.b64Data && img.mimeType) {
          contentParts.push({
            type: 'image_url',
            image_url: {
              url: `data:${img.mimeType};base64,${img.b64Data}`
            }
          });
        } else if (img.url) {
          contentParts.push({
            type: 'image_url',
            image_url: {
              url: img.url
            }
          });
        }
      }

      const formattedMessages = [
        {
          role: 'user',
          content: contentParts
        }
      ];

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
          model,
          messages: formattedMessages
        }),
        signal: options?.signal,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`OpenAI Vision API error (${response.status}): ${text}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || '';

      return {
        content,
        usage: {
          promptTokens: data.usage?.prompt_tokens || 100,
          completionTokens: data.usage?.completion_tokens || 40,
          totalTokens: data.usage?.total_tokens || 140,
        }
      };
    } catch (error) {
      throw error;
    }
  }
}
