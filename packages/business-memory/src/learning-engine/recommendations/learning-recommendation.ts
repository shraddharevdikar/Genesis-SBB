import { LearningDomain } from '../core/learning-profile.js';

export interface LearningRecommendation {
  readonly recommendationId: string;
  readonly tenantId: string;
  readonly domain: LearningDomain;
  readonly sourcePatternId?: string;
  readonly title: string;
  readonly description: string;
  readonly estimatedValueAddUSD?: number;
  readonly feasibility: 'EASY' | 'MODERATE' | 'COMPLEX';
  readonly targetedRoles: string[];
}
