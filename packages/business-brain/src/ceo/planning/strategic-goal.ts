export enum StrategicGoalCategory {
  GROWTH = 'GROWTH',
  PROFITABILITY = 'PROFITABILITY',
  INNOVATION = 'INNOVATION',
  CUSTOMER_SUCCESS = 'CUSTOMER_SUCCESS',
  OPERATIONAL_EXCELLENCE = 'OPERATIONAL_EXCELLENCE',
  MARKET_EXPANSION = 'MARKET_EXPANSION',
  DIGITAL_TRANSFORMATION = 'DIGITAL_TRANSFORMATION',
  RISK_REDUCTION = 'RISK_REDUCTION'
}

export interface StrategicGoal {
  readonly id: string;
  readonly category: StrategicGoalCategory;
  readonly name: string;
  readonly description: string;
  readonly targetYear: number;
}
