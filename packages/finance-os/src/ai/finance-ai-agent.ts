export interface FinanceAiAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AGT-FIN-FORECASTER"
  readonly displayName: string;
  readonly roleDescriptionText: string;
  readonly enabledCapabilitiesList: string[]; // e.g. ["LIQUIDITY_BURN_PREDICTION", "DUPLICATE_INVOICE_DETECTION", "BUDGET_COMPLIANCE_AUDIT"]
  readonly temperatureSettingValue: number;
  readonly isAgentEnabledFlag: boolean;
  readonly lastActiveAt: Date;
}
