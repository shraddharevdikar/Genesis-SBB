import { TaskInstanceId } from '../identity/task-instance-id.js';

export type DependencyType = 'BLOCKING' | 'SEQUENTIAL' | 'PARALLEL' | 'OPTIONAL';

export interface TaskDependency {
  readonly dependencyId: string;
  readonly sourceInstanceId: TaskInstanceId; // This task depends on target
  readonly targetInstanceId: TaskInstanceId; // The prerequisite task
  readonly type: DependencyType;
  readonly isStrict: boolean;
}
