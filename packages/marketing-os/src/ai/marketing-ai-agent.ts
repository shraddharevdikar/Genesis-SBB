import { MarketingContext } from '../core/marketing-context.js';

export interface MarketingAiAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AGT-MKTG-OPTIMIZER"
  readonly displayName: string;
  readonly roleDescriptionText: string;
  readonly capabilitiesList: string[]; // e.g. ["BUDGET_REALLOCATION", "BID_OPTIMIZATION", "COPYWRITING_SUGGESTION"]
  readonly temperatureSettingValue: number;
  readonly maxAutonomousSpendLimitAmount: number; // Safeguard limit for auto bidding
  readonly currencyCode: string;
  readonly isAgentEnabledFlag: boolean;
}
