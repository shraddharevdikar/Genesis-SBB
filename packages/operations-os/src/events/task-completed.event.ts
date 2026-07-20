import { OperationsTask } from '../work-management/task.js';
import { OperationsContext } from '../core/operations-context.js';

export interface TaskCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'TASK_COMPLETED';
  readonly payload: {
    readonly task: OperationsTask;
  };
  readonly context: OperationsContext;
}
