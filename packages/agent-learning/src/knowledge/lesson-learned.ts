import { LessonId } from '../identity/lesson-id.js';

export interface LessonLearned {
  readonly lessonId: LessonId;
  readonly tenantId: string;
  readonly contextExecutionId: string;
  readonly categoryTagCode: string; // e.g. "SBB_TIMETABLE_ROUTING"
  readonly contextDescription: string; // What happened
  readonly underlyingIssueNotes: string; // The problem detected
  readonly coreTakeawayText: string; // How to prevent/improve next time
  readonly validityRatingScore: number; // 0.0 - 1.0 (validated through usage)
  readonly recordedAt: Date;
}
