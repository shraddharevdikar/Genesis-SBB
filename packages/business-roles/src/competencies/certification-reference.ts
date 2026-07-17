export interface CertificationReference {
  readonly certificationId: string;
  readonly bodyIssuerNameString: string; // e.g. "CFA Institute", "PMI"
  readonly uniqueCertificateCode: string;
  readonly title: string;
  readonly expiresAt?: Date;
}
