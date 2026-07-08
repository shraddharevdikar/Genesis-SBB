import { EvaluationScore } from './evaluation-score.js';

export interface TradeoffAnalysis {
  readonly analysisId: string;
  readonly comparisonId: string;
  readonly evaluationScores: EvaluationScore[];
  readonly primaryTradeoffs: {
    readonly winningOptionId: string;
    readonly losingOptionId: string;
    readonly tradeOffDescription: string;
  }[];
  readonly riskImpactTradeoffText: string;
}
