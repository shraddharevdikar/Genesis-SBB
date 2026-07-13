import { ExperienceModel } from '../experience/experience-model.js';

export interface LearningRecordedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly experience: ExperienceModel;
  readonly recordedByRoleId: string;
  readonly timestamp: Date;
}
