export interface PropertyBuyerId {
  readonly value: string;
}

export interface PropertyBuyer {
  readonly buyerId: PropertyBuyerId;
  readonly uniqueBuyerCode: string; // e.g. "BYR-2026-CH-0042"
  readonly fullNameString: string;
  readonly contactEmailAddress: string;
  readonly contactPhoneNumber: string;
  readonly primaryPhysicalAddress: string;
  readonly taxIdentificationNumber?: string; // e.g. UID, AHV or PAN
  readonly leadSourceType: 'ORGANIC_WEB' | 'CHANNEL_PARTNER' | 'BROKER_DIRECT' | 'SOCIAL_MEDIA' | 'EXHIBITION';
  readonly associatedSalesRepresentativeRoleIdString: string; // references sales rep
  readonly preferencesNotesText?: string;
  readonly verifiedIdentityFlag: boolean;
  readonly activeFlag: boolean;
  readonly registeredAt: Date;
}
