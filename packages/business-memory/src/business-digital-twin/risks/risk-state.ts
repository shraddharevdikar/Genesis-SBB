import { DependencyState } from './dependency-state.js';

export interface IdentifiedThreat {
  readonly riskId: string;
  readonly category: 'COMPLIANCE' | 'SECURITY' | 'FINANCIAL' | 'MARKET' | 'REPUTATIONAL' | 'OPERATIONAL';
  readonly severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly probability: 'HIGH' | 'MEDIUM' | 'LOW';
  readonly financialImpactEstimateUSD: number;
  readonly mitigationPlanActive: boolean;
}

export interface RiskState {
  readonly activeRisksCount: number;
  readonly threats: IdentifiedThreat[];
  readonly criticalDependencies: DependencyState[];
  readonly aggregateRiskExposureUSD: number;
}
