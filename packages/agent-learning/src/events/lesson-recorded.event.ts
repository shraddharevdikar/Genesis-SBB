import { LessonId } from '../identity/lesson-id.js';

export interface LessonRecordedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly lessonId: LessonId;
  readonly contextExecutionId: string;
  readonly categoryTagCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
