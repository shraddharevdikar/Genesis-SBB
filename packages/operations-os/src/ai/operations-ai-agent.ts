export type OperationsAITaskCode =
  | 'FORECAST_CAPACITY'
  | 'REALLOCATE_RESOURCES'
  | 'DETECT_BOTTLENECKS'
  | 'PREDICT_SLA_BREACH'
  | 'SUGGEST_CONTINUOUS_IMPROVEMENTS';

export interface OperationsAIAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AI-OPS-PLANNER"
  readonly displayName: string;
  readonly capabilitiesList: OperationsAITaskCode[];
  readonly systemModelIdString: string; // e.g. "gemini-2.5-flash"
  readonly temperatureSettingDecimal: number;
  readonly activeFlag: boolean;
}
