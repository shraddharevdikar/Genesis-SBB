import { StudentId } from '../students/student.js';

export type GraduationAuditStatus =
  | 'AUDIT_NOT_STARTED'
  | 'ACADEMICS_PASSED_FINANCES_PENDING'
  | 'PENDING_ADVISOR_SIGN_OFF'
  | 'APPROVED_ELIGIBLE'
  | 'GRADUATED_CONFERRED'
  | 'DISQUALIFIED_DEFICIT';

export interface Graduation {
  readonly graduationId: string;
  readonly uniqueGraduationCode: string; // e.g., "GRD-2026-CH-00424"
  readonly associatedStudentId: StudentId;
  readonly associatedAcademicProgramIdString: string; // Links to Program
  readonly academicCurriculumSatisfiedFlag: boolean; // Curriculum courses/credits validated
  readonly minimumGpaRequirementSatisfiedFlag: boolean;
  readonly institutionalOutstandingBalanceClearedFlag: boolean; // Links to FinanceOS
  readonly libraryLoansClearedFlag: boolean; // Links to Library
  readonly graduationAuditStatus: GraduationAuditStatus;
  readonly finalApprovedByAdvisorStaffRoleIdString?: string;
  readonly targetCeremonyDate?: Date;
  readonly actualConferredDate?: Date;
  readonly lastModifiedAt: Date;
}
