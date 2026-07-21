export interface Course {
  readonly courseId: string;
  readonly uniqueCourseCode: string; // e.g., "CS-101"
  readonly courseTitle: string;
  readonly briefDescriptionText: string;
  readonly academicDepartmentIdString: string; // Links to Department
  readonly creditUnitsDecimal: number; // e.g. 3.0 or 4.0 credits
  readonly instructionType: 'LECTURE' | 'LABORATORY' | 'SEMINAR' | 'CLINICAL' | 'PRACTICUM' | 'INDEPENDENT_STUDY';
  readonly prerequisiteCourseCodesList: string[]; // List of required Course codes e.g. ["CS-100"]
  readonly corequisiteCourseCodesList: string[];
  readonly syllabusContentText?: string;
  readonly syllabusStorageURI?: string;
  readonly activeStatusFlag: boolean;
  readonly createdAt: Date;
  readonly lastModifiedAt: Date;
}
