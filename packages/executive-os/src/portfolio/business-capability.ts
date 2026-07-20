export interface BusinessCapability {
  readonly capabilityId: string;
  readonly uniqueCapabilityCode: string; // e.g. "CAP-REALTIME-TREASURY"
  readonly displayName: string;
  readonly descriptionText: string;
  readonly capabilityLevel: number; // e.g. Level 1, 2, 3 capability
  readonly businessOperatingSystemCode: 'MARKETING_OS' | 'SALES_OS' | 'FINANCE_OS' | 'HR_OS' | 'OPERATIONS_OS' | 'LEGAL_OS' | 'EXECUTIVE_OS';
  readonly maturityRatingDecimal: number; // e.g. 3.4 out of 5.0
  readonly isStrategicDifferentiatorFlag: boolean;
  readonly requiredAction: 'MAINTAIN' | 'INVEST_UPGRADE' | 'REPLACE' | 'OUTSOURCE';
  readonly lastAssessedAt: Date;
}
