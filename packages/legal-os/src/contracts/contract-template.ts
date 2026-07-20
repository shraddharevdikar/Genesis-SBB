export interface ContractTemplate {
  readonly templateId: string;
  readonly uniqueTemplateCode: string; // e.g. "TMP-NDA-MUTUAL-CH"
  readonly displayName: string;
  readonly associatedDepartmentIdString: string;
  readonly templateDocumentURI: string;
  readonly templateVersionCode: string; // e.g. "v2.1"
  readonly standardClausesJSON: string;
  readonly approvedByLegalRoleIdString: string;
  readonly activeFlag: boolean;
  readonly lastReviewedAt: Date;
}
