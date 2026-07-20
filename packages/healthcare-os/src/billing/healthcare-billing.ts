import { PatientId } from '../patients/patient.js';
import { MedicalBillingStatus } from '../core/care-lifecycle.js';

export interface BillingLineItem {
  readonly itemId: string;
  readonly chargeDescriptionText: string; // e.g. "MRI Brain scan standard charge" or "Physician consultation fee"
  readonly correspondingClinicalProcedureCode?: string; // e.g., CPT-4 code
  readonly unitChargeAmount: number;
  readonly quantityCount: number;
  readonly lineTotalAmount: number;
}

export interface HealthcareBilling {
  readonly billingId: string;
  readonly uniqueBillingCode: string; // e.g. "BIL-2026-CH-0442"
  readonly associatedPatientId: PatientId;
  readonly associatedEncounterIdString: string;
  readonly billingLineItemsList: BillingLineItem[];
  readonly grossSubtotalAmount: number;
  readonly currencyCode: string;
  readonly insuranceCoverageContributionAmount: number;
  readonly adjustmentsDiscountsAmount: number;
  readonly netPayablePatientCopayAmount: number;
  readonly paymentStatus: MedicalBillingStatus;
  readonly paymentDueDate: Date;
  readonly settledAt?: Date;
  readonly invoicedAt: Date;
}
