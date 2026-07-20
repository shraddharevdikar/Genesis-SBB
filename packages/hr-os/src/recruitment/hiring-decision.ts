import { CandidateId } from './candidate.js';

export interface OfferCompensationSummary {
  readonly annualBaseSalaryAmount: number;
  readonly annualVariableBonusTargetAmount: number;
  readonly equitySharesQuantityNumeric: number;
  readonly equityGrantValueUSDAmount: number;
  readonly signOnBonusAmount: number;
  readonly currencyCode: string;
}

export interface HiringDecision {
  readonly decisionId: string;
  readonly uniqueDecisionCode: string; // e.g. "DEC-HIRE-2026-0042"
  readonly candidateId: CandidateId;
  readonly targetRequisitionIdString: string;
  readonly decisionOutcome: 'APPROVED_OFFER_EXTENDED' | 'REJECTED_POST_INTERVIEW' | 'CANDIDATE_WITHDREW' | 'PUT_ON_HOLD';
  readonly associatedOfferCompensation?: OfferCompensationSummary;
  readonly standardBenefitsPackageCode?: string; // Links to preconfigured policies
  readonly hiringManagerOperatorRoleId: string;
  readonly peerReviewApproverOperatorRoleId?: string;
  readonly resolvedAt?: Date;
  readonly decisionNotesText: string;
}
