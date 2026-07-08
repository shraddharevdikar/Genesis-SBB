import { TokenUsage } from '../../cost/token-usage.js';
import { ProviderChatResult, ProviderResultChoice } from '../shared/provider-result.js';

export class GeminiMapper {
  public static mapChatResponse(rawResponse: any): ProviderChatResult {
    // Standardize mapping from typical Gemini JSON or mock structures
    let content = '';
    let usage: TokenUsage = { promptTokens: 0, completionTokens: 0, totalTokens: 0 };
    const choices: ProviderResultChoice[] = [];

    if (typeof rawResponse === 'string') {
      content = rawResponse;
    } else if (rawResponse && typeof rawResponse === 'object') {
      if (rawResponse.text && typeof rawResponse.text === 'function') {
        content = rawResponse.text();
      } else if (rawResponse.text) {
        content = rawResponse.text;
      } else if (rawResponse.candidates && rawResponse.candidates[0]) {
        const candidate = rawResponse.candidates[0];
        if (candidate.content && candidate.content.parts && candidate.content.parts[0]) {
          content = candidate.content.parts[0].text || '';
        }
      }

      if (rawResponse.usageMetadata) {
        usage = {
          promptTokens: rawResponse.usageMetadata.promptTokenCount || 0,
          completionTokens: rawResponse.usageMetadata.candidatesTokenCount || 0,
          totalTokens: rawResponse.usageMetadata.totalTokenCount || 0,
        };
      } else if (rawResponse.usage) {
        usage = {
          promptTokens: rawResponse.usage.promptTokens || 0,
          completionTokens: rawResponse.usage.completionTokens || 0,
          totalTokens: rawResponse.usage.totalTokens || 0,
        };
      }
    }

    // Default Token Estimator if not present
    if (usage.totalTokens === 0) {
      const promptLength = 10; // default estimated
      const completionLength = content ? Math.ceil(content.length / 4) : 25;
      usage = {
        promptTokens: promptLength,
        completionTokens: completionLength,
        totalTokens: promptLength + completionLength,
      };
    }

    choices.push({
      index: 0,
      text: content,
      role: 'assistant',
      finishReason: 'stop',
    });

    return {
      content,
      usage,
      choices,
    };
  }
}
