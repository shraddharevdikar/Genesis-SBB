import { Project } from '../projects/project.js';
import { ServicesContext } from '../core/services-context.js';

export interface ProjectStartedEvent {
  readonly eventId: string;
  readonly eventName: 'PROJECT_STARTED';
  readonly payload: {
    readonly projectRecord: Project;
    readonly assignedProjectManagerStaffRoleIdString: string;
    readonly targetCompletionDeadline: Date;
  };
  readonly context: ServicesContext;
}
