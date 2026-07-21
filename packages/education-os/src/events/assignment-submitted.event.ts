import { StudentId } from '../students/student.js';
import { EducationContext } from '../core/education-context.js';

export interface AssignmentSubmittedEvent {
  readonly eventId: string;
  readonly eventName: 'ASSIGNMENT_SUBMITTED';
  readonly payload: {
    readonly studentId: StudentId;
    readonly assignmentId: string;
    readonly submissionId: string;
    readonly submissionTimestamp: Date;
    readonly attemptNumber: number;
    readonly submittedDocumentURIsList: string[];
    readonly studentDetailedNotesString?: string;
  };
  readonly context: EducationContext;
}
