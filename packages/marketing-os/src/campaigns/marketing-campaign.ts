import { CampaignLifecycle } from '../core/marketing-lifecycle.js';
import { MarketingStrategyId } from '../strategy/marketing-strategy.js';
import { CampaignObjective } from './campaign-objective.js';
import { CampaignBudget } from './campaign-budget.js';
import { CampaignTimeline } from './campaign-timeline.js';

export interface CampaignId {
  readonly value: string;
}

export interface MarketingCampaign {
  readonly campaignId: CampaignId;
  readonly uniqueCampaignCode: string; // e.g. "CMP-SAAS-LAUNCH-2026"
  readonly displayName: string;
  readonly descriptionText: string;
  readonly parentStrategyId: MarketingStrategyId;
  readonly objective: CampaignObjective;
  readonly budget: CampaignBudget;
  readonly timeline: CampaignTimeline;
  readonly lifecycle: CampaignLifecycle;
  readonly ownerOperatorRoleId: string;
}
