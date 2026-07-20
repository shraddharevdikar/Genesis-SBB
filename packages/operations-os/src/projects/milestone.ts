import { ProjectId } from './project.js';

export interface Milestone {
  readonly milestoneId: string;
  readonly uniqueMilestoneCode: string; // e.g. "MS-GATEWAY-1"
  readonly associatedProjectId: ProjectId;
  readonly associatedPhaseIdString?: string;
  readonly milestoneNameString: string;
  readonly targetDate: Date;
  readonly completedDate?: Date;
  readonly isCriticalPathMilestoneFlag: boolean;
  readonly isCompletedFlag: boolean;
}
