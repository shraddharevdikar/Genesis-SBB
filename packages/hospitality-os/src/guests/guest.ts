export interface GuestId {
  readonly value: string;
}

export interface Guest {
  readonly guestId: GuestId;
  readonly uniqueGuestCode: string; // e.g. "GST-2026-00421"
  readonly firstNameString: string;
  readonly lastNameString: string;
  readonly emailAddressText: string;
  readonly phoneNumberText?: string;
  readonly dateOfBirth?: Date; // For regulatory check-in verification
  readonly associatedIdentityDocumentType?: 'PASSPORT' | 'DRIVERS_LICENSE' | 'NATIONAL_ID' | 'OTHER';
  readonly identityDocumentReferenceNumber?: string;
  readonly marketingConsentFlag: boolean;
  readonly activeStatusFlag: boolean;
  readonly registeredTimestamp: Date;
  readonly lastModifiedAt: Date;
}
