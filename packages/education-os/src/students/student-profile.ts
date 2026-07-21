import { StudentId } from './student.js';

export interface StudentProfile {
  readonly profileId: string;
  readonly associatedStudentId: StudentId;
  readonly uniqueProfileCode: string; // e.g. "PRF-STU-2026-0042"
  readonly nationalityCountryCode: string; // e.g., "USA", "CHE"
  readonly residentialAddressString: string;
  readonly mailingAddressString?: string;
  readonly emergencyContactName: string;
  readonly emergencyContactPhone: string;
  readonly emergencyContactRelationText: string;
  readonly preferredLanguageLocale: string; // e.g., "en-US"
  readonly medicalNotesText?: string;
  readonly specialAccommodationsFlag: boolean; // For accessibility / compliance
  readonly academicAdvisorStaffRoleIdString?: string; // Links to Role (Advisor)
  readonly extraCurricularActivitiesList: string[];
  readonly lastModifiedAt: Date;
}
