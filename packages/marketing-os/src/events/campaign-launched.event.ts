import { CampaignId } from '../campaigns/marketing-campaign.js';

export interface CampaignLaunchedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly campaignId: CampaignId;
  readonly uniqueCampaignCode: string;
  readonly publisherOperatorRoleId: string;
  readonly activeChannelCodesList: string[]; // e.g. ["CHN-SEO-CH", "CHN-GEO-GLOBAL"]
  readonly traceId: string;
  readonly timestamp: Date;
}
