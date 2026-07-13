import { LearningDomain } from '../core/learning-profile.js';

export interface PlaybookStep {
  readonly stepNumber: number;
  readonly action: string;
  readonly assignedRoleId: string;
  readonly successCriteria: string;
}

export interface ReusablePlaybook {
  readonly playbookId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly description: string;
  readonly domains: LearningDomain[];
  readonly steps: PlaybookStep[];
  readonly lastExecutionSuccessRate: number; // percentage
  readonly executionCount: number;
}
