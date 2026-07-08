import { ChatMessage } from '../contracts/ai-provider.js';
import { VisionImage } from '../contracts/vision-provider.js';
import { ProviderVisionResult } from '../shared/provider-result.js';
import { ProviderCredentials } from '../configuration/provider-credentials.js';

export class GeminiVision {
  constructor(private readonly apiKey?: string) {}

  public async analyzeImage(
    messages: ChatMessage[],
    images: VisionImage[],
    options?: Record<string, any>
  ): Promise<ProviderVisionResult> {
    const key = this.apiKey || ProviderCredentials.getApiKey('google-gemini');

    if (!key) {
      return {
        content: `[Google Gemini Vision Mock Response] Analyzed ${images.length} images successfully.`,
        usage: {
          promptTokens: 50 + messages.reduce((acc, m) => acc + Math.ceil(m.content.length / 4), 0),
          completionTokens: 25,
          totalTokens: 75 + messages.reduce((acc, m) => acc + Math.ceil(m.content.length / 4), 0),
        }
      };
    }

    try {
      const endpoint = options?.endpoint || ProviderCredentials.getEndpoint('google-gemini') || 'https://generativelanguage.googleapis.com/v1beta/models';
      const model = options?.model || 'gemini-1.5-flash';
      const url = `${endpoint}/${model}:generateContent?key=${key}`;

      // Format parts with text and base64 images if available
      const parts: any[] = [];
      
      // Add message contents as part
      for (const msg of messages) {
        parts.push({ text: msg.content });
      }

      // Add image parts
      for (const img of images) {
        if (img.b64Data && img.mimeType) {
          parts.push({
            inlineData: {
              mimeType: img.mimeType,
              data: img.b64Data
            }
          });
        } else if (img.url) {
          // If a URL is provided, we would normally download it or reference it depending on API
          // For now we add text referencing it or handle inline
          parts.push({ text: `[Image reference: ${img.url}]` });
        }
      }

      const contents = [{ role: 'user', parts }];

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents }),
        signal: options?.signal,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Gemini Vision API error (${response.status}): ${text}`);
      }

      const data = await response.json();
      let content = '';
      if (data && data.candidates && data.candidates[0]) {
        const candidate = data.candidates[0];
        if (candidate.content && candidate.content.parts && candidate.content.parts[0]) {
          content = candidate.content.parts[0].text || '';
        }
      }

      return {
        content,
        usage: {
          promptTokens: data.usageMetadata?.promptTokenCount || 100,
          completionTokens: data.usageMetadata?.candidatesTokenCount || 40,
          totalTokens: data.usageMetadata?.totalTokenCount || 140,
        }
      };
    } catch (error) {
      throw error;
    }
  }
}
