export type EvidenceReferenceTypeCode =
  | 'LEGAL_REGULATION_BOOK'
  | 'INTERNAL_LEDGER_TRANSACTION'
  | 'THIRD_PARTY_AUDIT_REPORT'
  | 'WIKIPEDIA_OR_PUBLIC_WEB'
  | 'BOARD_MEETING_MINUTES_PDF';

export interface EvidenceReference {
  readonly evidenceId: string;
  readonly typeCode: EvidenceReferenceTypeCode;
  readonly title: string;
  readonly locatorURIString: string; // storage path or web URL
  readonly integritySha256ChecksumString?: string;
  readonly verifiedAt: Date;
}
