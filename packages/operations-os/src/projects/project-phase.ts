import { ProjectId } from './project.js';

export interface ProjectPhase {
  readonly phaseId: string;
  readonly uniquePhaseCode: string; // e.g. "PHS-ANALYSIS"
  readonly associatedProjectId: ProjectId;
  readonly sequenceNumber: number;
  readonly phaseNameString: string;
  readonly activeFlag: boolean;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly completedFlag: boolean;
}
