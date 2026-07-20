export type RealEstateAITaskCode =
  | 'DEMAND_FORECAST_SIMULATION'
  | 'OPTIMAL_DYNAMIC_PRICING'
  | 'INVENTORY_INTELLIGENCE'
  | 'CONSTRUCTION_RISK_DETECTION'
  | 'BUYER_MATCHING_RECOMMENDATION';

export interface RealEstateAIAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AI-RE-CO-PILOT"
  readonly displayName: string;
  readonly capabilitiesList: RealEstateAITaskCode[];
  readonly systemModelIdString: string; // e.g. "gemini-3.5-flash"
  readonly temperatureSettingDecimal: number;
  readonly activeFlag: boolean;
}
