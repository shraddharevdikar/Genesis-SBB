import { CustomerHealthState } from './customer-health-state.js';

export interface CustomerStateSummary {
  readonly customerOrganizationId: string;
  readonly status: 'ACTIVE' | 'CHURN_MITIGATION' | 'CHURNED' | 'PROSPECT' | 'ONBOARDING';
  readonly valueTier: 'ENTERPRISE' | 'MID_MARKET' | 'SMB';
  readonly health: CustomerHealthState;
  readonly annualRecurringRevenueUSD: number;
  readonly renewalRiskScore: number; // 0 to 100
}

export interface CustomerState {
  readonly totalActiveCustomers: number;
  readonly totalArrUSD: number;
  readonly averageHealthScore: number; // 0 to 100
  readonly segmentDistribution: {
    readonly enterpriseCount: number;
    readonly midMarketCount: number;
    readonly smbCount: number;
  };
  readonly customerSummaries: CustomerStateSummary[];
}
