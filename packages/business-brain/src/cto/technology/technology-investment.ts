export interface TechnologyInvestment {
  readonly investmentId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly category: 'SAAS' | 'CLOUD_INFRA' | 'DEVELOPER_TOOLS' | 'AI_MODELS' | 'HARDWARE' | 'OUTSOURCING';
  readonly requestedAmountUSD: number;
  readonly anticipatedAnnualSavingsUSD: number;
  readonly paybackPeriodMonths: number;
  readonly estimatedRoiPercent: number;
  readonly justification: string;
  readonly status: 'PROPOSED' | 'APPROVED' | 'REJECTED' | 'HELD';
  readonly requestedBy: string;
  readonly createdAt: Date;
}
