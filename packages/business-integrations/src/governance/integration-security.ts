export type EncryptionAlgorithmCode = 'AES_256_GCM' | 'RSA_4096_OAEP' | 'TLS_1_3';

export interface IntegrationSecurity {
  readonly securityId: string;
  readonly encryptionAlgorithm: EncryptionAlgorithmCode;
  readonly isMtlsRequiredFlag: boolean;
  readonly isAuditLogSignatureRequiredFlag: boolean;
  readonly allowedIPRangeCIDRList: string[]; // e.g. ["10.240.0.0/16"]
  readonly auditReferenceIdentifier: string; // e.g. "AUD-SEC-2026-X"
}
