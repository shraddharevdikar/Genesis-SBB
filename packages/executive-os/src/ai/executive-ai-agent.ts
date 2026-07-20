export type ExecutiveAITaskCode =
  | 'ANALYZE_STRATEGIC_RISK'
  | 'EVALUATE_PORTFOLIO_ROI'
  | 'SYNTHESIZE_EXECUTIVE_BRIEFING'
  | 'RUN_SCENARIO_SIMULATION'
  | 'DETECT_CROSS_OS_ANOMALIES'
  | 'RECOMMEND_CAPITAL_ALLOCATION';

export interface ExecutiveAIAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AI-EXE-STRATEGIC-CO-PILOT"
  readonly displayName: string;
  readonly capabilitiesList: ExecutiveAITaskCode[];
  readonly systemModelIdString: string; // e.g. "gemini-3.5-flash"
  readonly temperatureSettingDecimal: number;
  readonly activeFlag: boolean;
}
