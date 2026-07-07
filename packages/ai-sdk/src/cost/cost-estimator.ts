import { TokenUsage, CostEstimate } from './token-usage.js';

export interface ModelRates {
  readonly inputRatePerThousand: number;
  readonly outputRatePerThousand: number;
}

export class CostEstimator {
  private static readonly modelRates = new Map<string, ModelRates>([
    ['gemini-1.5-flash', { inputRatePerThousand: 0.000125, outputRatePerThousand: 0.000375 }],
    ['gemini-1.5-pro', { inputRatePerThousand: 0.00125, outputRatePerThousand: 0.00375 }],
    ['gpt-4o', { inputRatePerThousand: 0.005, outputRatePerThousand: 0.015 }],
  ]);

  public static estimate(model: string, usage: TokenUsage): CostEstimate {
    const rates = this.modelRates.get(model) || {
      inputRatePerThousand: 0.001,
      outputRatePerThousand: 0.003,
    };

    const inputCost = (usage.promptTokens / 1000) * rates.inputRatePerThousand;
    const outputCost = (usage.completionTokens / 1000) * rates.outputRatePerThousand;

    return {
      inputCost,
      outputCost,
      totalCost: inputCost + outputCost,
      currency: 'USD',
    };
  }
}
