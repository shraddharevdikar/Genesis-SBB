import { AutomationTrigger } from './automation-trigger.js';
import { AutomationAction } from './automation-action.js';

export interface AutomationRule {
  readonly ruleId: string;
  readonly uniqueRuleCode: string; // e.g. "AUT-RULE-BILLING-ALERT"
  readonly displayName: string;
  readonly isRuleEnabled: boolean;
  readonly trigger: AutomationTrigger;
  readonly preConditionExpressionJsonString?: string; // logical check expression
  readonly executionActionsList: AutomationAction[];
}
