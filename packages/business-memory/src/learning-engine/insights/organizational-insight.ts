import { LearningDomain } from '../core/learning-profile.js';

export interface OrganizationalInsight {
  readonly insightId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly summary: string;
  readonly domain: LearningDomain;
  readonly rootCauseAnalysis?: string;
  readonly businessVulnerabilityFlagged: boolean;
  readonly capturedAt: Date;
}
