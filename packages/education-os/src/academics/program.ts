export type DegreeType =
  | 'HIGH_SCHOOL_DIPLOMA'
  | 'ASSOCIATE_OF_ARTS_OR_SCIENCE'
  | 'BACHELOR_OF_ARTS_OR_SCIENCE'
  | 'MASTER_OF_ARTS_OR_SCIENCE'
  | 'DOCTOR_OF_PHILOSOPHY'
  | 'PROFESSIONAL_CERTIFICATION';

export interface AcademicProgram {
  readonly programId: string;
  readonly uniqueProgramCode: string; // e.g., "PROG-BS-CS"
  readonly programTitle: string;
  readonly awardDegreeType: DegreeType;
  readonly owningDepartmentIdString: string; // Links to Department
  readonly standardDurationYearsCount: number; // e.g., 4 years
  readonly minimumRequiredCredits: number; // e.g., 120
  readonly activeStatusFlag: boolean;
  readonly accreditationBodyName?: string; // For jurisdiction standards compliance
  readonly lastAccreditedDate?: Date;
  readonly createdAt: Date;
}
