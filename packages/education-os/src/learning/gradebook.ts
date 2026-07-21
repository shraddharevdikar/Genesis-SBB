import { StudentId } from '../students/student.js';

export interface GradebookItemGrade {
  readonly academicTaskType: 'ASSIGNMENT' | 'ASSESSMENT';
  readonly associatedTaskIdString: string; // Links to AssignmentId or AssessmentId
  readonly scoredPointsAmount: number;
  readonly outOfMaxPointsAmount: number;
  readonly gradingEducatorStaffRoleIdString: string; // Instructor/TA ID who graded
  readonly feedbackCommentsText?: string;
  readonly gradedAt: Date;
}

export interface Gradebook {
  readonly gradebookId: string;
  readonly uniqueGradebookCode: string; // e.g., "GBK-2026-F-CS101-STU-0042"
  readonly associatedStudentId: StudentId;
  readonly associatedCourseIdString: string; // Links to Course
  readonly academicTermIdString: string; // Links to Term
  readonly recordedItemGradesList: GradebookItemGrade[];
  readonly currentCalculatedWeightedGradePercentage: number; // e.g. 92.4
  readonly calculatedLetterGradeCode: string; // e.g. "A-"
  readonly isLockedAndFinalizedFlag: boolean; // Registrar approval locks final grades
  readonly lastCalculatedAt: Date;
}
