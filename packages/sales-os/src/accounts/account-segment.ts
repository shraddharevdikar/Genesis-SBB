export type AccountSegmentTierCode =
  | 'STRATEGIC_KEY_ACCOUNT'
  | 'ENTERPRISE'
  | 'MID_MARKET'
  | 'COMMERCIAL_SMB'
  | 'GOVERNMENT_PUBLIC_SECTOR';

export interface AccountSegment {
  readonly segmentId: string;
  readonly tier: AccountSegmentTierCode;
  readonly minEmployeeCount: number;
  readonly maxEmployeeCount?: number;
  readonly geographicRegionCode: string; // e.g., "EMEA", "APAC", "AMER"
  readonly industryClassificationCode: string; // e.g., "SIC-7372"
  readonly targetServiceTierDescription: string; // e.g., "GOLD_SUPPORT" or "PREMIUM"
}
