import { ImpactSummary } from './impact-summary.js';

export interface ScenarioImpact {
  readonly impactId: string;
  readonly scenarioId: string;
  readonly tenantId: string;
  readonly projectedFinancialImpact: ImpactSummary;
  readonly projectedOperationalImpact: ImpactSummary;
  readonly projectedStrategicImpact: ImpactSummary;
  readonly riskDeltaScore: number; // difference in risk exposure (-100 to 100)
  readonly overallRecommendation: 'PROCEED_CONFIDENT' | 'PROCEED_CAUTIOUS' | 'ABORT' | 'FURTHER_STUDY';
  readonly assessedAt: Date;
}
