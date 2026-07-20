export interface ScenarioParameter {
  readonly variableName: string; // e.g. "Interest Rate Change" or "Competitor Price Cut"
  readonly baselineValue: number;
  readonly simulatedValue: number;
  readonly deltaPercentageDecimal: number;
}

export interface ScenarioAnalysis {
  readonly scenarioId: string;
  readonly uniqueScenarioCode: string; // e.g. "SCN-2026-MARKET-CRASH"
  readonly displayName: string;
  readonly descriptionText: string;
  readonly category: 'BEST_CASE' | 'MOST_LIKELY' | 'STRESS_TEST_CRITICAL';
  readonly simulatedVariablesList: ScenarioParameter[];
  readonly expectedNPVImpactAmount: number;
  readonly expectedEBITDAImpactAmount: number;
  readonly currencyCode: string;
  readonly strategicMitigationNotes: string;
  readonly performedByRoleIdString: string;
  readonly performedAt: Date;
}
