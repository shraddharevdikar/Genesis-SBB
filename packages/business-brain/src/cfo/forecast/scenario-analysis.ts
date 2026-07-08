export interface ScenarioAnalysis {
  readonly scenarioId: string;
  readonly name: string;
  readonly bestCaseOutcomeUSD: number;
  readonly expectedCaseOutcomeUSD: number;
  readonly worstCaseOutcomeUSD: number;
  readonly probabilityWeights?: {
    readonly bestCase: number;     // e.g. 0.2
    readonly expectedCase: number; // e.g. 0.6
    readonly worstCase: number;    // e.g. 0.2
  };
  readonly keyAssumptions: string[];
}
