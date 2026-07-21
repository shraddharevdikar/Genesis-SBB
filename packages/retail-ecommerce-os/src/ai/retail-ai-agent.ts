export type RetailAITaskCode =
  | 'DEMAND_FORECASTING_STOCK_VELOCITY'
  | 'PRODUCT_RECOMMENDATIONS_PERSONALIZATION'
  | 'DYNAMIC_PRICING_MARKDOWN_OPTIMIZATION'
  | 'MARKET_BASKET_AFFINITY_ANALYSIS'
  | 'CUSTOMER_LIFECYCLE_SEGMENTATION';

export interface RetailAIAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AI-RTL-CO-PILOT"
  readonly displayName: string;
  readonly capabilitiesList: RetailAITaskCode[];
  readonly systemModelIdString: string; // e.g. "gemini-3.5-flash"
  readonly temperatureSettingDecimal: number;
  readonly activeFlag: boolean;
}
