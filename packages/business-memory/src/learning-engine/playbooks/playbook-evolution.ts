import { ReusablePlaybook } from './reusable-playbook.js';

export interface PlaybookEvolution {
  readonly evolutionId: string;
  readonly playbookId: string;
  readonly versionBefore: string;
  readonly versionAfter: string;
  readonly reasonForChange: string;
  readonly modifiedByRoleId: string;
  readonly performanceDeltaPercent: number; // e.g. +5% execution speed or reliability
  readonly updatedAt: Date;
}
