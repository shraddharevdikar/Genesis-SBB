import { BusinessRule } from './business-rule.js';

export interface DecisionPoint {
  readonly pointId: string;
  readonly uniqueDecisionCode: string; // e.g. "DEC-CREDIT-CHECK"
  readonly shortQuestionText: string;
  readonly baseEvaluatingRuleRef: BusinessRule;
  readonly possibleOutcomeBranchesList: string[]; // e.g. ["APPROVED", "REJECTED", "ESC_REQUIRED"]
  readonly autoRerouteFallbackBranchName: string;
}
