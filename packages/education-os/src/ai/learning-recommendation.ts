import { StudentId } from '../students/student.js';

export interface RecommendedStudyItem {
  readonly resourceName: string;
  readonly resourceURLString: string;
  readonly recommendationType: 'REMEDIAL_PRACTICE' | 'ADVANCED_ENRICHMENT' | 'ELECTIVE_COURSE_SUGGESTION' | 'TUTORING_SESSION_MATCH';
  readonly matchConfidenceScore: number; // e.g. 0.95
}

export interface LearningRecommendation {
  readonly recommendationId: string;
  readonly uniqueRecommendationCode: string; // e.g., "REC-EDU-STU-0042"
  readonly associatedStudentId: StudentId;
  readonly currentUnderperformingSubjectAreaText?: string;
  readonly recommendedItemsList: RecommendedStudyItem[];
  readonly rationalBasisText: string; // Explanation of AI reasoning
  readonly educatorSignOffStaffRoleIdString?: string; // Mandated educator review & approval
  readonly academicDecisionApprovedFlag: boolean; // Must be true before sharing with student (Institutional Governance)
  readonly calculatedAt: Date;
}
