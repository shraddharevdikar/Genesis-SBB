import { PatientId } from '../patients/patient.js';

export interface InsuranceClaim {
  readonly claimId: string;
  readonly uniqueClaimCode: string; // e.g. "CLM-2026-CH-9442"
  readonly associatedPatientId: PatientId;
  readonly associatedBillingIdString: string;
  readonly insuranceProviderCorporateName: string;
  readonly policyNumberText: string;
  readonly authorizationPreApprovalCode?: string;
  readonly initialClaimAmount: number;
  readonly approvedReimbursedAmount?: number;
  readonly patientCoPayDeductibleAmount?: number;
  readonly claimCurrencyCode: string;
  readonly status: 'PREPARATION' | 'SUBMITTED' | 'UNDER_AUDIT' | 'APPROVED_SETTLED' | 'REJECTED_DENIED';
  readonly denialReasonCodeText?: string;
  readonly submittedAt?: Date;
  readonly adjudicatedAt?: Date;
}
