import { ArchitectureHealth } from '../architecture/architecture-health.js';
import { SecurityPosture } from '../security/security-posture.js';
import {
  TechnologyRecommendation,
  ArchitectureRecommendation,
  SecurityRecommendation,
  InnovationRecommendation
} from './technology-recommendation.js';

export interface ExecutiveTechnologySummary {
  readonly summaryId: string;
  readonly tenantId: string;
  readonly architecturalHealthSummary: ArchitectureHealth;
  readonly securityPostureSummary: SecurityPosture;
  readonly techRecommendations: TechnologyRecommendation[];
  readonly archRecommendations: ArchitectureRecommendation[];
  readonly secRecommendations: SecurityRecommendation[];
  readonly innovRecommendations: InnovationRecommendation[];
  readonly overallTechGovernanceStatus: 'OPTIMAL' | 'ACCEPTABLE' | 'RISKY' | 'CRITICAL';
  readonly generatedBy: string; // e.g., "CTO Brain Identifier"
  readonly compiledAt: Date;
}
