import { AutomationCondition } from './automation-condition.js';

export type ConditionTargetTypeCode =
  | 'BUSINESS_OBJECT_PROPERTY'
  | 'KPI_METRIC_VALUE'
  | 'ACTIVE_WORKFLOW_STATE'
  | 'ROLE_PERMISSIONS_MATCH'
  | 'COMPLIANCE_POLICY_RULE';

export interface BusinessCondition extends AutomationCondition {
  readonly targetType: ConditionTargetTypeCode;
  readonly sourceResourceURI: string; // e.g. "kpi://finance/arr" or "workflow://invoice/status"
  readonly propertyPathString?: string; // e.g. "amount" or "currentOwner"
}
