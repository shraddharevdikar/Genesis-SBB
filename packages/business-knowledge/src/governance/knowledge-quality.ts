export interface KnowledgeQuality {
  readonly qualityAuditId: string;
  readonly completenessRatioScore: number; // e.g. 0.0 - 1.0 (100% complete metadata)
  readonly factCheckedPassedCount: number;
  readonly failedFactChecksCount: number;
  readonly isHallucinationFlagDetected: boolean; // checks for AI sanity validation
  readonly lastQualityAssessmentAt: Date;
  readonly certifiedGoodFlag: boolean;
}
