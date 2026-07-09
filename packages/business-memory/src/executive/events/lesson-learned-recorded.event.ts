import { ExecutiveMemoryId } from '../identity/executive-memory-id.js';
import { LessonLearned } from '../knowledge/lesson-learned.js';

export interface LessonLearnedRecordedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly executiveMemoryId: ExecutiveMemoryId;
  readonly recordedLesson: LessonLearned;
  readonly timestamp: Date;
}
