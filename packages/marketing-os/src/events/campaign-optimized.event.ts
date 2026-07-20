import { CampaignId } from '../campaigns/marketing-campaign.js';

export interface CampaignOptimizedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly campaignId: CampaignId;
  readonly uniqueCampaignCode: string;
  readonly optimizerOperatorRoleId: string;
  readonly targetChannelUniqueCode: string; // e.g. "CHN-PAID-SEM"
  readonly appliedRecommendationIdString: string;
  readonly budgetShiftAmount: number; // Signed shift amount (+ or -)
  readonly traceId: string;
  readonly timestamp: Date;
}
