export interface SalesAiAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AGT-SALES-FORECASTER"
  readonly displayName: string;
  readonly roleDescriptionText: string;
  readonly enabledCapabilitiesList: string[]; // e.g. ["DEAL_RISK_DETECTION", "WIN_PROBABILITY_COMPUTATION", "SALES_COACHING"]
  readonly temperatureSettingValue: number;
  readonly isAgentEnabledFlag: boolean;
  readonly lastActiveAt: Date;
}
