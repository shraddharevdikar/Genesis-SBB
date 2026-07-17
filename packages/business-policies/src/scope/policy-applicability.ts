import { PolicyScope } from './policy-scope.js';

export interface PolicyApplicability {
  readonly applicabilityId: string;
  readonly targetScope: PolicyScope;
  readonly evaluationRuleExpressionJsonString: string; // JSON-Schema or JMESPath logic matching scope context
  readonly customEvaluationMessageText: string;
  readonly isApplicableByDefaultFlag: boolean;
}
