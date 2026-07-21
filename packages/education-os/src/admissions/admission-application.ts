import { AdmissionStatus } from '../core/learning-lifecycle.js';

export interface ApplicantTestScore {
  readonly testName: string; // e.g. "SAT", "ACT", "TOEFL", "GRE"
  readonly achievedScoreDecimal: number;
  readonly testDate: Date;
}

export interface SubmittedDocument {
  readonly documentType: 'OFFICIAL_TRANSCRIPT' | 'PERSONAL_ESSAY' | 'RECOMMENDATION_LETTER' | 'RESUME_CV' | 'PROOF_OF_CITIZENSHIP';
  readonly documentTitle: string;
  readonly storageURI: string;
  readonly verificationStatus: 'PENDING_VERIFICATION' | 'VERIFIED_PASSED' | 'FAILED_FRAUDULENT';
}

export interface AdmissionApplication {
  readonly applicationId: string;
  readonly uniqueApplicationCode: string; // e.g., "ADM-APP-2026-00424"
  readonly applicantFirstName: string;
  readonly applicantLastName: string;
  readonly applicantEmailAddress: string;
  readonly applicantPhoneNumberString?: string;
  readonly targetAcademicProgramIdString: string; // Links to Program
  readonly targetAdmissionCycleIdString: string; // Links to Cycle
  readonly currentAdmissionStatus: AdmissionStatus;
  readonly submittedApplicantTestScoresList: ApplicantTestScore[];
  readonly uploadedVerificationDocumentsList: SubmittedDocument[];
  readonly interviewerEvaluationCommentsText?: string;
  readonly reviewerStaffRoleIdString?: string; // Admissions Officer who processed
  readonly applicationSubmissionTimestamp: Date;
  readonly decisionReleasedTimestamp?: Date;
  readonly lastModifiedAt: Date;
}
