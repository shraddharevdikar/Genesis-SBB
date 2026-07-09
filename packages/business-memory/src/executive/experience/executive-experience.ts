import { ConfidenceEvolution } from './confidence-evolution.js';

export interface ExecutiveExperience {
  readonly experienceId: string;
  readonly tenantId: string;
  readonly executiveId: string; // references ExecutiveOwner
  readonly experienceLevel: 'EMERGING' | 'PROFICIENT' | 'EXPERT' | 'MASTER';
  readonly coreCompetenciesTrained: string[];
  readonly dynamicPatternsRecognized: string[];
  readonly overallConfidenceScore: number; // 0 to 100
  readonly levelProgressionPercent: number; // 0 to 100
  readonly evolutions: ConfidenceEvolution[];
  readonly lastEvaluatedAt: Date;
}
