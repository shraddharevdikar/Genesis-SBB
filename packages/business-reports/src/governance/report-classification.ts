export type ConfidentialityClassificationCode =
  | 'PUBLIC_UNRESTRICTED'
  | 'INTERNAL_SBB_ONLY'
  | 'CONFIDENTIAL_STRICT_ROLES'
  | 'SECRET_BOARD_ONLY'
  | 'RESTRICTED_BY_LAW_NDA';

export interface ReportClassification {
  readonly classificationId: string;
  readonly securityCode: ConfidentialityClassificationCode;
  readonly encryptionStandardSpecificationCode: string; // e.g. "AES_256_GCM"
  readonly requiresWatermarkingFlag: boolean;
  readonly complianceDisclaimerText?: string;
  readonly minimumOperatorClearanceLevelCode: 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_4' | 'LEVEL_5';
}
