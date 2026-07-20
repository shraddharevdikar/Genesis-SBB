export type LegalAITaskCode =
  | 'DETECT_CONTRACT_RISK'
  | 'MONITOR_COMPLIANCE'
  | 'ANALYZE_REGULATORY_CHANGE'
  | 'TRACK_LEGAL_OBLIGATION'
  | 'SUGGEST_AUDIT_PLAN'
  | 'PROVIDE_GOVERNANCE_INSIGHT';

export interface LegalAIAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AI-LEG-COMPLIANCE-SCANNER"
  readonly displayName: string;
  readonly capabilitiesList: LegalAITaskCode[];
  readonly systemModelIdString: string; // e.g. "gemini-2.5-flash"
  readonly temperatureSettingDecimal: number;
  readonly activeFlag: boolean;
}
