export interface LearningMetrics {
  readonly metricsId: string;
  readonly agentId: string;
  readonly tenantId: string;
  readonly newlyAcquiredSkillsCount: number;
  readonly knowledgeBaseHitsCount: number;
  readonly knowledgeBaseMissesCount: number;
  readonly selfCorrectionAttemptsCount: number;
  readonly calculatedAt: Date;
}
