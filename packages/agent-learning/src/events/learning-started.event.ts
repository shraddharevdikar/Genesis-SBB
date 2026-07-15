import { LearningId } from '../identity/learning-id.js';

export interface LearningStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly learningId: LearningId;
  readonly targetResourceId: string; // The completed plan ID or session being evaluated
  readonly traceId: string;
  readonly timestamp: Date;
}
