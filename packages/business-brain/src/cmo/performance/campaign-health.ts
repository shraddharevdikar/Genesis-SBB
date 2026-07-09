export interface CampaignStatus {
  readonly campaignId: string;
  readonly name: string;
  readonly budgetAllocatedUSD: number;
  readonly spentAmountUSD: number;
  readonly impressionsCount: number;
  readonly clicksCount: number;
  readonly conversionsCount: number;
  readonly ctrPercent: number; // Click-Through Rate
  readonly cpcUSD: number;      // Cost Per Click
  readonly cpaUSD: number;      // Cost Per Acquisition
  readonly healthStatus: 'HEALTHY' | 'WARNING' | 'CRITICAL';
}

export interface CampaignHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly overallCampaignHealthScore: number; // 0 to 100
  readonly campaigns: CampaignStatus[];
  readonly criticalCampaignAlerts: string[];
  readonly evaluatedAt: Date;
}
