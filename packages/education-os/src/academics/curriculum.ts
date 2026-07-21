export interface ElectiveGroup {
  readonly groupName: string; // e.g. "Math Electives", "Social Sciences"
  readonly requiredCreditsCount: number;
  readonly eligibleCourseCodesList: string[];
}

export interface Curriculum {
  readonly curriculumId: string;
  readonly uniqueCurriculumCode: string; // e.g. "CUR-CS-BS-2026"
  readonly curriculumTitle: string;
  readonly associatedProgramIdString: string; // Links to Academic Program
  readonly descriptionText: string;
  readonly coreMandatoryCourseCodesList: string[]; // Courses that must be passed
  readonly electiveGroupsList: ElectiveGroup[];
  readonly totalCreditsRequiredForCompletion: number;
  readonly minimumCumulativeGpaRequired: number; // e.g., 2.0
  readonly curriculumVersionString: string; // e.g., "v2026.1"
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
