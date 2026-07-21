import { Graduation } from '../certification/graduation.js';
import { EducationContext } from '../core/education-context.js';

export interface GraduationCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'GRADUATION_COMPLETED';
  readonly payload: {
    readonly graduationRecord: Graduation;
    readonly totalDegreeCreditsEarned: number;
    readonly finalCumulativeGpa: number;
  };
  readonly context: EducationContext;
}
