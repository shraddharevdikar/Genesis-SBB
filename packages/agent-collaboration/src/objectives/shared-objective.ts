import { SuccessMetric } from './success-metric.js';
import { Milestone } from './milestone.js';

export interface SharedObjective {
  readonly objectiveId: string;
  readonly title: string;
  readonly description: string;
  readonly priorityWeight: number; // Relative weight in the workspace
  readonly targetMetricsList: SuccessMetric[];
  readonly milestoneStepsList: Milestone[];
  readonly status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  readonly targetedCompletionDate: Date;
}
