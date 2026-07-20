export type ManufacturingAITaskCode =
  | 'PRODUCTION_LINE_THROUGHPUT_OPTIMIZATION'
  | 'MACHINE_PREDICTIVE_MAINTENANCE_RECOMMENDATION'
  | 'QUALITY_DEFECT_ANOMALY_DETECTION'
  | 'CAPACITY_RESOURCES_FORECASTING'
  | 'SUPPLIER_RISK_ANALYSIS';

export interface ManufacturingAIAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AI-MFG-CO-PILOT"
  readonly displayName: string;
  readonly capabilitiesList: ManufacturingAITaskCode[];
  readonly systemModelIdString: string; // e.g. "gemini-3.5-flash"
  readonly temperatureSettingDecimal: number;
  readonly activeFlag: boolean;
}
