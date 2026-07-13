export interface MaturityDimension {
  readonly score: number; // 0 to 100
  readonly benchmarkScore: number;
  readonly targetScore: number;
  readonly gapAnalysisSummary: string;
}

export interface OrganizationalMaturity {
  readonly maturityId: string;
  readonly tenantId: string;
  readonly measuredAt: Date;
  readonly overallMaturityLevel: number; // 1 to 5
  readonly dimensions: {
    readonly knowledgeCreation: MaturityDimension;
    readonly patternRecognition: MaturityDimension;
    readonly doubleLoopLearning: MaturityDimension;
  };
}
