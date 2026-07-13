import { ConfidenceModel } from './confidence-model.js';

export interface ConfidenceTrend {
  readonly trendId: string;
  readonly tenantId: string;
  readonly history: Array<{
    readonly timestamp: Date;
    readonly confidence: ConfidenceModel;
  }>;
  readonly trajectory: 'UPWARD' | 'STABLE' | 'DOWNWARD';
  readonly volatilityRating: 'HIGH' | 'MEDIUM' | 'LOW';
}
