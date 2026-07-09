export interface EngineeringQuality {
  readonly qualityId: string;
  readonly tenantId: string;
  readonly microserviceOrRepoName: string;
  readonly overallQualityGrade: 'A' | 'B' | 'C' | 'D' | 'F';
  readonly testCoveragePercent: number; // 0 to 100
  readonly lintRuleCompliancePercent: number; // 0 to 100
  readonly buildSuccessRatePercent: number; // 0 to 100
  readonly averagePrCycleTimeHours: number;
  readonly staticAnalysisVulnerabilityCount: number;
  readonly checkedAt: Date;
}
