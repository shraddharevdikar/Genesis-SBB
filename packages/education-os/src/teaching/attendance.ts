import { StudentId } from '../students/student.js';

export type AttendanceStatus = 'PRESENT' | 'ABSENT_UNEXCUSED' | 'ABSENT_EXCUSED' | 'TARDY_LATE';

export interface AttendanceRecordLine {
  readonly studentId: StudentId;
  readonly status: AttendanceStatus;
  readonly minutesTardyCount?: number; // Null if present or absent
  readonly educatorObservationNotesText?: string;
}

export interface AttendanceSheet {
  readonly attendanceSheetId: string;
  readonly uniqueSheetCode: string; // e.g., "ATT-CS101-SEC1-20261015"
  readonly associatedTimetableSlotIdString: string; // Links to TimetableSlot
  readonly associatedInstructorIdString: string; // Who recorded attendance
  readonly classSessionDate: Date;
  readonly attendanceRecordsList: AttendanceRecordLine[];
  readonly totalPresentCount: number;
  readonly totalAbsentCount: number;
  readonly completedAndVerifiedFlag: boolean;
  readonly submittedAt: Date;
}
