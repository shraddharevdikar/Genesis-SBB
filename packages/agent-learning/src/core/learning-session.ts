import { LearningId } from '../identity/learning-id.js';
import { LearningLifecycleState } from './learning-lifecycle.js';

export interface LearningSession {
  readonly sessionId: string;
  readonly learningId: LearningId;
  readonly tenantId: string;
  readonly targetResourceId: string; // The completed plan ID, step ID, or execution session being analyzed
  readonly state: LearningLifecycleState;
  readonly startedAt: Date;
  readonly lastUpdatedAt: Date;
}
