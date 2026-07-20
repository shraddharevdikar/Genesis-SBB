import { CandidateLifecycleState } from '../core/employee-lifecycle.js';

export interface CandidateId {
  readonly value: string;
}

export interface Candidate {
  readonly candidateId: CandidateId;
  readonly uniqueCandidateCode: string; // e.g. "CAN-JOHN-DOE"
  readonly fullName: string;
  readonly emailAddressString: string;
  readonly phoneNumberString?: string;
  readonly cvResumeDocumentURI: string;
  readonly targetRequisitionIdString: string;
  readonly sourceChannelTag: 'LINKEDIN' | 'DIRECT_REFERRAL' | 'CAREER_PORTAL' | 'RECRUITING_AGENCY' | 'INTERNAL_TRANSFER';
  readonly referralEmployeeIdString?: string;
  readonly aiResumeScreeningScoreRatioDecimal: number; // e.g. 0.88 matches req skills
  readonly matchesStandardCompetenciesList: string[]; // Competency match array
  readonly currentState: CandidateLifecycleState;
  readonly recruiterOperatorRoleId: string;
  readonly appliedAt: Date;
  readonly lastActiveAt: Date;
}
