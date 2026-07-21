import { StudentStatus } from '../core/learning-lifecycle.js';

export interface StudentId {
  readonly value: string;
}

export interface Student {
  readonly studentId: StudentId;
  readonly uniqueStudentCode: string; // e.g., "STU-2026-0042"
  readonly firstName: string;
  readonly lastName: string;
  readonly dateOfBirth: Date;
  readonly genderCode?: string;
  readonly emailAddress: string;
  readonly phoneNumberString?: string;
  readonly currentStatus: StudentStatus;
  readonly currentAcademicYearIndex: number; // e.g., 1 (Freshman), 2 (Sophomore)...
  readonly primaryProgramIdString?: string; // e.g. Major / Degree Program
  readonly cumulativeGpa: number;
  readonly enrolledDate: Date;
  readonly graduatedDate?: Date;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
