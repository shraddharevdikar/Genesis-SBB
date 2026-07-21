import { Enrollment } from '../students/enrollment.js';
import { EducationContext } from '../core/education-context.js';

export interface StudentEnrolledEvent {
  readonly eventId: string;
  readonly eventName: 'STUDENT_ENROLLED';
  readonly payload: {
    readonly enrollment: Enrollment;
  };
  readonly context: EducationContext;
}
