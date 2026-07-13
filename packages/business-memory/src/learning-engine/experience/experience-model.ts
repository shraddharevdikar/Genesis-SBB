import { LearningDomain } from '../core/learning-profile.js';

export interface ExperienceModel {
  readonly experienceId: string;
  readonly tenantId: string;
  readonly domain: LearningDomain;
  readonly eventSourceId?: string; // e.g. decisionId, processId, projectCode
  readonly recordedAt: Date;
  readonly durationWeeks: number;
  readonly summary: string;
  readonly numericalOutcomes: Record<string, number>;
}
