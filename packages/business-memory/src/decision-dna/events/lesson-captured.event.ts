import { LessonLearned } from '../learning/lesson-learned.js';

export interface LessonCapturedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly decisionId: string;
  readonly lesson: LessonLearned;
  readonly capturedByRoleId: string;
  readonly timestamp: Date;
}
