import { BusinessRule } from './business-rule.js';

export interface ValidationRule {
  readonly validationId: string;
  readonly associatedRuleRef: BusinessRule;
  readonly failureSeverityCode: 'INFO' | 'WARNING' | 'CRITICAL_HALT';
  readonly customizedUserAlertMessageText: string;
  readonly autoMitigationTriggerCode?: string;
}
