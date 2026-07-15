import { ExecutionMode } from './execution-mode.js';
import { ExecutionPriority } from './execution-priority.js';

export interface ExecutionStrategy {
  readonly strategyId: string;
  readonly mode: ExecutionMode;
  readonly priority: ExecutionPriority;
  readonly maxParallelStepsCount: number;
  readonly allowAutomaticFailoverToBackupAgent: boolean;
  readonly logVerbosityLevel: 'VERBOSE' | 'STANDARD' | 'MINIMAL';
}
