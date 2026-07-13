import { ExperienceModel } from './experience-model.js';

export interface ExecutiveExperience extends ExperienceModel {
  readonly executiveRoleId: string;
  readonly individualDisplayName: string;
  readonly personalInsightsCaptured: string[];
  readonly leadershipConsensusLevel: number; // 0 to 100
}
