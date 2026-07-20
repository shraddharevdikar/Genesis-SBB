export interface ProviderId {
  readonly value: string;
}

export interface HealthcareProvider {
  readonly providerId: ProviderId;
  readonly uniqueProviderCode: string; // e.g. "PRV-ZURICH-HOSP"
  readonly displayName: string;
  readonly classification: 'HOSPITAL' | 'CLINIC' | 'DIAGNOSTIC_CENTER' | 'TELEMEDICINE_GROUP' | 'SPECIALTY_CARE_GROUP';
  readonly stateLicenseCode: string;
  readonly clinicalGovernancePolicyDocURI: string;
  readonly ratingScoreDecimal: number; // e.g. 4.9 out of 5.0
  readonly verifiedAt: Date;
  readonly activeFlag: boolean;
}
