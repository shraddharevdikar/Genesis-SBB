import { ProcessId } from '../identity/process-id.js';

export interface ProcessDependency {
  readonly dependencyId: string;
  readonly dependentProcessId: ProcessId;
  readonly requiredPriorProcessId: ProcessId;
  readonly isBlockingStrictSuccessor: boolean;
  readonly criticalMilestoneStageCode?: string;
}
