export type OutputTypeCode =
  | 'AUDIT_LOG'
  | 'DATA_RECORDS'
  | 'DIGITAL_ASSET'
  | 'LEDGER_TRANSACTION';

export interface ProcessOutput {
  readonly outputId: string;
  readonly uniqueOutputCode: string; // e.g. "OUT-RECEIPT-PDF"
  readonly displayName: string;
  readonly typeCode: OutputTypeCode;
  readonly targetDownstreamSystemIdentifierCode: string;
}
