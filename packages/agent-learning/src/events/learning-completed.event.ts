import { LearningId } from '../identity/learning-id.js';

export interface LearningCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly learningId: LearningId;
  readonly traceId: string;
  readonly timestamp: Date;
}
