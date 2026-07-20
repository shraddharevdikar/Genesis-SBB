import { MarketingStrategyId } from './marketing-strategy.js';

export interface CampaignStrategy {
  readonly campaignStrategyId: string;
  readonly parentStrategyId: MarketingStrategyId;
  readonly targetProductCategoryCode: string; // e.g. "PROD-SOFTWARE"
  readonly keyValuePropositionNotes: string;
  readonly messagingPillarsList: string[]; // e.g. ["SOVEREIGNTY", "COMPLIANCE", "AUTOMATION"]
  readonly primaryBrandVoiceGuideCode: string;
}
