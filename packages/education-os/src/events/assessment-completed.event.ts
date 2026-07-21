import { StudentId } from '../students/student.js';
import { EducationContext } from '../core/education-context.js';

export interface AssessmentCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'ASSESSMENT_COMPLETED';
  readonly payload: {
    readonly studentId: StudentId;
    readonly assessmentId: string;
    readonly attemptId: string;
    readonly scoreObtainedDecimal: number;
    readonly maximumPossiblePoints: number;
    readonly letterGradeCode?: string;
    readonly proctorVerifiedFlag: boolean;
    readonly proctorObservationsText?: string;
    readonly completedTimestamp: Date;
  };
  readonly context: EducationContext;
}
