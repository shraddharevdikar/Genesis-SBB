export type WeekdayCode = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';

export interface TimetableSlot {
  readonly slotId: string;
  readonly uniqueSlotCode: string; // e.g. "TSL-CS101-FALL2026-01"
  readonly associatedCourseIdString: string; // Links to Course
  readonly associatedInstructorIdString: string; // Links to Instructor
  readonly associatedClassroomIdString: string; // Links to Classroom
  readonly academicTermIdString: string; // Links to Academic Term
  readonly scheduledDaysOfWeekList: WeekdayCode[]; // e.g., ["MON", "WED", "FRI"]
  readonly dailyStartTimeText: string; // e.g. "09:00" (24h format)
  readonly dailyEndTimeText: string; // e.g. "10:15" (24h format)
  readonly maximumEnrollmentLimitCount: number;
  readonly currentEnrolledStudentsCount: number;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
