export interface RoleBestPractice {
  readonly practiceId: string;
  readonly uniqueReferenceCode: string; // e.g. "RBP-CFO-HEDGE-02"
  readonly title: string;
  readonly detailedBodyText: string;
  readonly measuredSuccessRateScoreValue: number; // e.g. 0.0 - 100.0
  readonly verifiedSuccessfulAt: Date;
}
