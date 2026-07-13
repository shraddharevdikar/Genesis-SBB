import { TaskId } from '../identity/task-id.js';
import { DependencyType } from './task-dependency.js';

export interface DependencyRule {
  readonly ruleId: string;
  readonly tenantId: string;
  readonly sourceTaskId: TaskId;
  readonly targetTaskId: TaskId;
  readonly defaultType: DependencyType;
  readonly isMandatory: boolean;
}
