import { Tradeoff } from './tradeoff.js';

export interface Alternative {
  readonly alternativeId: string;
  readonly title: string;
  readonly description: string;
  readonly estimatedCostUSD?: number;
  readonly estimatedTimeWeeks?: number;
  readonly tradeoffs: Tradeoff[];
  readonly feasibility: 'HIGH' | 'MEDIUM' | 'LOW';
}
