import { StudentId } from '../students/student.js';

export interface TranscriptTermCourseRecord {
  readonly courseCode: string;
  readonly courseTitle: string;
  readonly creditUnitsDecimal: number;
  readonly finalGradeLetterCode: string;
  readonly finalGradePercentage: number;
  readonly isRepeatedCourseFlag: boolean;
}

export interface TranscriptTermRecord {
  readonly academicTermIdString: string;
  readonly academicTermCode: string;
  readonly termCreditsAttempted: number;
  readonly termCreditsEarned: number;
  readonly termCalculatedGpa: number;
  readonly termCoursesList: TranscriptTermCourseRecord[];
}

export interface Transcript {
  readonly transcriptId: string;
  readonly uniqueTranscriptCode: string; // e.g., "TXP-STU-2026-0042"
  readonly associatedStudentId: StudentId;
  readonly cumulativeCreditsAttempted: number;
  readonly cumulativeCreditsEarned: number;
  readonly cumulativeGpa: number;
  readonly academicTermsHistoryList: TranscriptTermRecord[];
  readonly officialRegistrarStampIssuedFlag: boolean; // Must be true for audit / employment transfers
  readonly generatedTimestamp: Date;
  readonly secureVerificationHashString: string;
}
