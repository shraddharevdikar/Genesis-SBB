export interface LearningChannelBudget {
  readonly channelType: 'TECHNICAL_BOOTCAMPS' | 'LEADERSHIP_COACHING' | 'SELF_PACED_SUBSCRIPTIONS' | 'EXTERNAL_CONFERENCES';
  readonly allocatedBudgetUSD: number;
  readonly expectedCertificationsCount: number;
}

export interface LearningStrategy {
  readonly strategyId: string;
  readonly tenantId: string;
  readonly fiscalYear: string;
  readonly targetedCapabilityGrowthPercentage: number;
  readonly channels: LearningChannelBudget[];
  readonly totalLearningBudgetUSD: number;
  readonly isApproved: boolean;
  readonly updatedAt: Date;
}
