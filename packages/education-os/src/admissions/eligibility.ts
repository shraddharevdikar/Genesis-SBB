import { DegreeType } from '../academics/program.js';

export interface MinimumSubjectGradeRequirement {
  readonly subjectName: string; // e.g., "Mathematics", "English"
  readonly minimumRequiredLetterGrade: string; // e.g. "B"
}

export interface EligibilityRule {
  readonly ruleId: string;
  readonly uniqueRuleCode: string; // e.g., "ELG-BS-CS-MATH-REQ"
  readonly ruleName: string;
  readonly associatedAcademicProgramIdString: string; // Links to Program
  readonly minimumRequiredPriorDegreeType: DegreeType;
  readonly minimumPriorCumulativeGpa: number; // e.g. 3.0
  readonly subjectMinimumGradesList: MinimumSubjectGradeRequirement[];
  readonly requiredStandardizedTestScoresJSON?: string; // e.g. Minimum SAT Math score
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
