export interface OperationsContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly activeOperatorRoleId: string;
  readonly localeCode: string; // e.g. "en-US"
  readonly executionTimezone: string; // e.g. "Europe/Zurich"
  readonly timestamp: Date;
  readonly businessOperatingSystemCode: 'OPERATIONS_OS';
}
