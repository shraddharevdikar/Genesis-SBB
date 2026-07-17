export type TriggerTypeCode =
  | 'DOMAIN_EVENT_OCCURRED'
  | 'CHRONOMETRIC_CRON_SCHEDULE'
  | 'KPI_THRESHOLD_MET_VIOLATED'
  | 'BUSINESS_RULE_RESULT_SIGNAL';

export interface AutomationTrigger {
  readonly triggerId: string;
  readonly uniqueCode: string; // e.g. "TRG-CRON-MIDNIGHT"
  readonly typeCode: TriggerTypeCode;
  readonly listeningDomainEventNameString?: string; // e.g. "ProcessPublished"
  readonly cronExpressionText?: string; // e.g. "0 0 * * *"
  readonly sourceRuleReferenceIdString?: string;
  readonly filterEvaluatorExpressionJsonString?: string; // payload parsing filter
}
