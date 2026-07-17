import { Objective } from './objective.js';

export interface OperationalObjective {
  readonly baseObjective: Objective;
  readonly associatedProcessIdString?: string;
  readonly associatedWorkflowIdString?: string;
  readonly coreProcessSlaBoundaryMinutesCount?: number;
}
