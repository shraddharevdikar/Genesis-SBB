import { CultureHealth } from '../culture/culture-health.js';
import { TalentIntelligence } from '../talent/talent-intelligence.js';
import { WorkforceCapacity } from '../workforce/workforce-capacity.js';
import {
  WorkforceRecommendation,
  TalentRecommendation,
  LeadershipRecommendation,
  OrganizationalHealthSummary
} from './people-recommendation.js';

export interface ExecutivePeopleSummary {
  readonly summaryId: string;
  readonly tenantId: string;
  readonly cultureHealthSummary: CultureHealth;
  readonly talentIntelligenceSummary: TalentIntelligence;
  readonly workforceCapacitySummary: WorkforceCapacity;
  readonly workforceRecommendations: WorkforceRecommendation[];
  readonly talentRecommendations: TalentRecommendation[];
  readonly leadershipRecommendations: LeadershipRecommendation[];
  readonly organizationalHealthSummaries: OrganizationalHealthSummary[];
  readonly overallPeoplePostureStatus: 'OPTIMAL' | 'ACCEPTABLE' | 'CONCERNING' | 'CRITICAL';
  readonly generatedBy: string; // e.g. "CHRO Brain Identifier"
  readonly compiledAt: Date;
}
