export interface BestPracticeReference {
  readonly referenceId: string;
  readonly uniqueReferenceCode: string; // e.g. "BPR-MKT-SEO-01"
  readonly title: string;
  readonly bodyMarkdownText: string;
  readonly positiveOutcomeVerificationMetricCode?: string;
  readonly verifiedSuccessfulAt: Date;
}
