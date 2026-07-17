import { PolicyRuleId } from '../identity/policy-rule-id.js';
import { PolicyCondition } from './policy-condition.js';
import { PolicyAction } from './policy-action.js';

export type RuleBehaviorCode =
  | 'OBLIGATION'   // MUST take action
  | 'RESTRICTION'  // MUST NOT exceed or violate
  | 'RECOMMENDATION' // Best-practice guidelines
  | 'DECISION_NODE'; // Branching evaluation

export interface BusinessRule {
  readonly ruleId: PolicyRuleId;
  readonly uniqueRuleCode: string; // e.g. "RUL-FIN-LIMIT-100K"
  readonly displayName: string;
  readonly behaviorCode: RuleBehaviorCode;
  readonly targetEvaluationCondition: PolicyCondition;
  readonly triggeredMandatoryActionsList: PolicyAction[];
  readonly isOverridableWithApproval: boolean;
}
