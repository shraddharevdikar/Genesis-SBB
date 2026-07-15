import { CollaborationId } from '../identity/collaboration-id.js';

export interface TeamProductivity {
  readonly productivityId: string;
  readonly collaborationId: CollaborationId;
  readonly tenantId: string;
  readonly milestonesCompletedRatio: number; // e.g. 0.85 (85%)
  readonly tasksResolvedPerDayCount: number;
  readonly savedSbbManHoursEstimated: number; // Quantitative hours saved indices
  readonly calculatedAt: Date;
}
