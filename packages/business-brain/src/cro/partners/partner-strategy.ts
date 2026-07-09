export interface PartnerProgramDetails {
  readonly programId: string;
  readonly partnerType: 'CHANNEL_PARTNER' | 'SYSTEM_INTEGRATOR' | 'ALLIANCE' | 'REFERRAL' | 'MARKETPLACE';
  readonly partnerName: string;
  readonly strategicFocusDescription: string;
  readonly revenueSharingPercent: number; // e.g. 15 for 15% revenue share
}

export interface PartnerStrategy {
  readonly strategyId: string;
  readonly tenantId: string;
  readonly programName: string;
  readonly partnersList: PartnerProgramDetails[];
  readonly plannedInvestmentUSD: number;
  readonly targetedCoSellRevenueUSD: number;
  readonly isEnforced: boolean;
  readonly updatedAt: Date;
}
