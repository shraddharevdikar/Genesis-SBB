export interface Certification {
  readonly certificationId: string;
  readonly uniqueCertificationCode: string; // e.g. "CRT-ISO-27001-LEAD"
  readonly displayName: string;
  readonly issuingAuthorityNameString: string; // e.g. "BSI", "Amazon Web Services"
  readonly associatedEmployeeIdString: string;
  readonly credentialIdString?: string;
  readonly achievedDate: Date;
  readonly expirationDate?: Date;
  readonly isPermanentFlag: boolean;
  readonly verificationDocumentURI?: string;
  readonly certificationStatus: 'ACTIVE' | 'EXPIRED' | 'REVOKED' | 'SUSPENDED';
}
