export type HospitalityAITaskCode =
  | 'OCCUPANCY_DEMAND_FORECASTING'
  | 'DYNAMIC_PRICING_OPTIMIZATION'
  | 'GUEST_EXPERIENCE_SENTIMENT_ANALYSIS'
  | 'HOUSEKEEPING_ROTA_OPTIMIZATION'
  | 'FOOD_PREPARATION_WASTE_REDUCTION'
  | 'FACILITY_SCHEDULING_RECOMMENDATIONS';

export interface HospitalityAIAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AI-HOS-CO-PILOT"
  readonly displayName: string;
  readonly capabilitiesList: HospitalityAITaskCode[];
  readonly systemModelIdString: string; // e.g., "gemini-2.5-flash"
  readonly temperatureSettingDecimal: number;
  readonly activeFlag: boolean;
  readonly lastModifiedAt: Date;
}
