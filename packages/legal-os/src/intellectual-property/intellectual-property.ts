export interface IntellectualPropertyId {
  readonly value: string;
}

export interface IntellectualPropertyAsset {
  readonly ipAssetId: IntellectualPropertyId;
  readonly uniqueIpCode: string; // e.g. "IP-PAT-2026-004"
  readonly displayName: string;
  readonly ipType: 'TRADEMARK' | 'COPYRIGHT' | 'PATENT' | 'TRADE_SECRET';
  readonly internalOwnerDepartmentIdString: string;
  readonly registrationAuthorityString?: string; // e.g. "IPI Switzerland", "USPTO"
  readonly officialRegistrationNumberString?: string;
  readonly filingDate?: Date;
  readonly registrationDate?: Date;
  readonly currentStatusString: 'UNDER_DRAFTING' | 'FILED_PENDING' | 'REGISTERED_ACTIVE' | 'EXPIRED_LAPSED' | 'ABANDONED';
  readonly expiryDate?: Date;
  readonly publicStandardDocURI?: string;
  readonly activeFlag: boolean;
  readonly createdAt: Date;
}
