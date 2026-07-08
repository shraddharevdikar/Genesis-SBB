import { TokenUsage } from '../../cost/token-usage.js';
import { ProviderChatResult, ProviderResultChoice } from '../shared/provider-result.js';

export class OpenAIMapper {
  public static mapChatResponse(rawResponse: any): ProviderChatResult {
    let content = '';
    let usage: TokenUsage = { promptTokens: 0, completionTokens: 0, totalTokens: 0 };
    const choices: ProviderResultChoice[] = [];

    if (typeof rawResponse === 'string') {
      content = rawResponse;
    } else if (rawResponse && typeof rawResponse === 'object') {
      if (rawResponse.choices && rawResponse.choices[0]) {
        const choice = rawResponse.choices[0];
        if (choice.message) {
          content = choice.message.content || '';
        } else if (choice.text) {
          content = choice.text;
        }

        rawResponse.choices.forEach((c: any, index: number) => {
          choices.push({
            index,
            text: c.message?.content || c.text || '',
            role: c.message?.role || 'assistant',
            finishReason: c.finish_reason || 'stop',
          });
        });
      }

      if (rawResponse.usage) {
        usage = {
          promptTokens: rawResponse.usage.prompt_tokens || 0,
          completionTokens: rawResponse.usage.completion_tokens || 0,
          totalTokens: rawResponse.usage.total_tokens || 0,
        };
      }
    }

    // Default Token Estimator if not present
    if (usage.totalTokens === 0) {
      const promptLength = 10;
      const completionLength = content ? Math.ceil(content.length / 4) : 25;
      usage = {
        promptTokens: promptLength,
        completionTokens: completionLength,
        totalTokens: promptLength + completionLength,
      };
    }

    if (choices.length === 0) {
      choices.push({
        index: 0,
        text: content,
        role: 'assistant',
        finishReason: 'stop',
      });
    }

    return {
      content,
      usage,
      choices,
    };
  }
}
