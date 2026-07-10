export type ScenarioType = 'EXPANSION' | 'ACQUISITION' | 'PRODUCT_LAUNCH' | 'HIRING' | 'BUDGET_REDUCTION' | 'MARKET_ENTRY';

export interface Scenario {
  readonly scenarioId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly type: ScenarioType;
  readonly description: string;
  readonly simulatedVariableAdjustments: Record<string, any>;
  readonly createdByRoleId: string;
  readonly createdAt: Date;
}
