import { PlatformState } from './platform-state.js';

export interface TechStackMetric {
  readonly techStackCategory: string; // e.g., "BACKEND", "FRONTEND", "AI_ML"
  readonly standardComplianceRate: number; // percentage
  readonly technicalDebtScore: number; // 0 to 100
  readonly averageSlaComplianceRate: number; // percentage
}

export interface TechnologyState {
  readonly averageTechnicalDebtScore: number; // 0 to 100
  readonly criticalTechStandardsCount: number;
  readonly metricsByCategory: TechStackMetric[];
  readonly enterprisePlatforms: PlatformState[];
  readonly isSystemicStandardApproved: boolean;
}
