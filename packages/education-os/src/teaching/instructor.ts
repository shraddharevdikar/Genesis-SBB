export type FacultyType =
  | 'TENURED_FULL_PROFESSOR'
  | 'ASSOCIATE_PROFESSOR'
  | 'ASSISTANT_PROFESSOR'
  | 'ADJUNCT_LECTURER'
  | 'TEACHING_ASSISTANT'
  | 'GUEST_INSTRUCTOR';

export interface Instructor {
  readonly instructorId: string;
  readonly uniqueInstructorCode: string; // e.g., "INS-2026-0042"
  readonly associatedStaffRoleIdString: string; // Links to HROS / Role (Employee Contract)
  readonly primaryDepartmentIdString: string; // Links to Department
  readonly facultyType: FacultyType;
  readonly academicSpecialtiesList: string[]; // e.g. ["Quantum Computing", "Algorithms"]
  readonly highestDegreeEarnedText: string; // e.g. "Ph.D. in Computer Science"
  readonly officeRoomNumberString?: string;
  readonly maxCourseSectionLoadPerTermCount: number; // For scheduling optimization
  readonly currentActiveSectionLoadCount: number;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
