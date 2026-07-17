export type ComplianceStatusCode =
  | 'NON_COMPLIANT'
  | 'PARTIALLY_COMPLIANT'
  | 'COMPLIANT_VERIFIED'
  | 'NOT_APPLICABLE'
  | 'EXPIRED_WAITING_AUDIT';

export interface ComplianceStatus {
  readonly currentStatusCode: ComplianceStatusCode;
  readonly verifiedAt?: Date;
  readonly verifiedByAuditorOperatorRoleId?: string;
  readonly evidenceDocumentStorageHashString?: string;
  readonly remarksLogText?: string;
}
