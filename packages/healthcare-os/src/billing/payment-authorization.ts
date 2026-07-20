import { PatientId } from '../patients/patient.js';

export interface PaymentAuthorization {
  readonly authorizationId: string;
  readonly uniqueAuthorizationCode: string; // e.g. "AUTH-PAY-2026-CH-04"
  readonly associatedPatientId: PatientId;
  readonly associatedBillingIdString?: string;
  readonly cardTokenOrBankAccountIdentifier: string; // tokenized payment instrument (reusing SBB FinanceOS standards)
  readonly maximumAuthorizedDebitAmount: number;
  readonly currencyCode: string;
  readonly patientConsentSignedAt: Date;
  readonly patientConsentDocURI: string;
  readonly verificationStatus: 'PENDING_BANK_PIN' | 'VERIFIED_ACTIVE' | 'EXPIRED' | 'REJECTED_INSUFFICIENT';
  readonly lastTestedAt: Date;
}
