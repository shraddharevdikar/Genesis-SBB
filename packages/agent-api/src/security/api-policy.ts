export interface ApiPolicy {
  readonly policyId: string;
  readonly requireHmacSignature: boolean;
  readonly enforceSslTlsProtocolVersionString: string; // e.g. "TLSv1.3"
  readonly blockUnencryptedPayloads: boolean;
  readonly maxRequestPayloadBytesSize: number;
}
