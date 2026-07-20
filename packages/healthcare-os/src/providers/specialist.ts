import { ProviderId } from './healthcare-provider.js';

export interface MedicalSpecialist {
  readonly specialistId: string;
  readonly associatedProviderId: ProviderId;
  readonly uniqueSpecialistCode: string; // e.g. "SPC-ONCO-JONES"
  readonly fullNameString: string;
  readonly subSpecializationFieldText: string; // e.g. "Pediatric Oncology" or "Neuro-Radiology"
  readonly boardCertificationName: string; // e.g. "American Board of Pediatrics"
  readonly consultationFeeAmount: number;
  readonly currencyCode: string;
  readonly leadTimeDaysCount: number; // average waiting list wait time
  readonly researchProfileDocURI?: string;
  readonly activeStatusFlag: boolean;
  readonly contractedAt: Date;
}
