export interface DecisionTradeoff {
  readonly tradeoffId: string;
  readonly uniqueTradeoffCode: string; // e.g. "TDF-COST-VS-SPEED"
  readonly targetOptionIdString: string;
  readonly prosAdvantagesList: string[];
  readonly consDisadvantagesList: string[];
  readonly qualitativeNetBenefitScore: number; // e.g. +3 or -1
  readonly riskRatingScore: number; // 0-10 scale
  readonly isAcceptableUnderCurrentPolicyFlag: boolean;
}
