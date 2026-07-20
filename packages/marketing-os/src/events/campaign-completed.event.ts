import { CampaignId } from '../campaigns/marketing-campaign.js';

export interface CampaignCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly campaignId: CampaignId;
  readonly uniqueCampaignCode: string;
  readonly closerOperatorRoleId: string;
  readonly totalActualSpendAmount: number;
  readonly totalLeadsGeneratedCount: number;
  readonly targetNumericGoalAchieved: boolean;
  readonly traceId: string;
  readonly timestamp: Date;
}
