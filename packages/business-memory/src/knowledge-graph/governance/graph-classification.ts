export enum DataPrivacyRegime {
  GDPR = 'GDPR',
  HIPAA = 'HIPAA',
  CCPA = 'CCPA',
  SOC2_CONFIDENTIAL = 'SOC2_CONFIDENTIAL',
  STANDARD_COMMERCIAL = 'STANDARD_COMMERCIAL'
}

export interface GraphClassification {
  readonly classificationId: string;
  readonly regime: DataPrivacyRegime;
  readonly isSensitivePII: boolean;
  readonly maskFields: string[]; // Properties on nodes that must be masked
  readonly dataRetentionPeriodDays?: number;
}
