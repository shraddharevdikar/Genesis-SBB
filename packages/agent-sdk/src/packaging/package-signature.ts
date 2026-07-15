export interface PackageSignature {
  readonly signatureId: string;
  readonly algorithmCodeString: string; // e.g. "SHA-256"
  readonly signatureHashString: string;
  readonly signingCertificateFingerprintString: string;
  readonly signedAt: Date;
  readonly isVerified: boolean;
}
