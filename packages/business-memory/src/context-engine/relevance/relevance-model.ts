import { RelevanceFactor } from './relevance-factor.js';

export interface RelevanceModel {
  readonly score: number; // 0 to 100
  readonly confidence: number; // 0.0 to 1.0
  readonly factors: RelevanceFactor[];
  readonly lastCalculatedAt: Date;
}
