import { StudentId } from './student.js';
import { EnrollmentStatus } from '../core/learning-lifecycle.js';

export interface Enrollment {
  readonly enrollmentId: string;
  readonly uniqueEnrollmentCode: string; // e.g., "ENR-2026-CH-0042-CS101"
  readonly associatedStudentId: StudentId;
  readonly targetCourseSectionIdString: string; // Links to Section/Course
  readonly academicTermIdString: string; // Links to Term
  readonly enrollmentStatus: EnrollmentStatus;
  readonly isAuditOnlyFlag: boolean;
  readonly totalEarnedCreditsCount: number;
  readonly finalGradeLetterCode?: string; // e.g. "A", "B+", "P"
  readonly finalGradePercentage?: number; // e.g., 94.5
  readonly enrollmentDate: Date;
  readonly droppedDate?: Date;
  readonly lastModifiedAt: Date;
}
