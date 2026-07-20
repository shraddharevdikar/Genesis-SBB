export interface ExecutiveGovernance {
  readonly governanceId: string;
  readonly uniqueGovernanceCode: string; // e.g. "GOV-2026-CH-CHARTER"
  readonly charterTitleString: string;
  readonly revisionCodeString: string; // e.g. "v4.2"
  readonly auditFrequencyMonthsCount: number; // e.g. 12
  readonly boardSizeRequiredCount: number;
  readonly minimumQuorumRatioDecimal: number; // e.g. 0.60 (60% board quorum required)
  readonly mandateDocumentURI: string;
  readonly activeFlag: boolean;
  readonly lastRevisedAt: Date;
}
