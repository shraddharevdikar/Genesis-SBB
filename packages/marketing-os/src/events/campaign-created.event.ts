import { CampaignId } from '../campaigns/marketing-campaign.js';

export interface CampaignCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly campaignId: CampaignId;
  readonly uniqueCampaignCode: string;
  readonly displayName: string;
  readonly creatorOperatorRoleId: string;
  readonly allocatedBudgetAmount: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
