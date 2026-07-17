export type InputTypeCode =
  | 'DOCUMENT'
  | 'DATA_PAYLOAD'
  | 'OAUTH_TOKEN'
  | 'SIGNAL_TRIGGER';

export interface ProcessInput {
  readonly inputId: string;
  readonly uniqueInputCode: string; // e.g. "INP-BILLING-CSV"
  readonly displayName: string;
  readonly typeCode: InputTypeCode;
  readonly isEncryptedAtRestRequired: boolean;
}
