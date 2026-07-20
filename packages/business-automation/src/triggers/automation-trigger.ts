import { TriggerId } from '../identity/trigger-id.js';

export type TriggerCategoryCode =
  | 'SYSTEM_EVENT_EMITTED'
  | 'TIME_SCHEDULE_ELAPSED'
  | 'BUSINESS_CONDITION_MATCHED'
  | 'KPI_THRESHOLD_VIOLATED'
  | 'POLICY_COMPLIANCE_CHANGED';

export interface AutomationTrigger {
  readonly triggerId: TriggerId;
  readonly uniqueTriggerCode: string; // e.g. "TRG-SALES-ARR-DROP"
  readonly displayName: string;
  readonly category: TriggerCategoryCode;
  readonly isTriggerActive: boolean;
  readonly customConfigurationJsonString?: string; // category-specific parameters
}
