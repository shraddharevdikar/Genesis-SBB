import { Project } from '../projects/project.js';
import { OperationsContext } from '../core/operations-context.js';

export interface ProjectCreatedEvent {
  readonly eventId: string;
  readonly eventName: 'PROJECT_CREATED';
  readonly payload: {
    readonly project: Project;
  };
  readonly context: OperationsContext;
}
