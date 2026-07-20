export interface ExecutiveContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly actingExecutiveRoleId: string; // Links to Role module (e.g. "CEO", "CFO", "CHRO")
  readonly localeCode: string; // e.g. "en-CH"
  readonly executionTimezone: string; // e.g. "Europe/Zurich"
  readonly timestamp: Date;
  readonly businessOperatingSystemCode: 'EXECUTIVE_OS';
}
