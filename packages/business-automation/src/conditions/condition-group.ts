import { AutomationCondition } from './automation-condition.js';

export type LogicalGroupingOperatorCode = 'AND' | 'OR';

export interface ConditionGroup extends AutomationCondition {
  readonly logicalOperator: LogicalGroupingOperatorCode;
  readonly nestedConditionsList: AutomationCondition[];
  readonly conditionWeightCount?: number; // ordering or precedence
}
