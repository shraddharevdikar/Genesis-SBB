export interface IndustryContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly actingUserRoleId: string; // Links to Role module (e.g. "PROJECT_DIRECTOR", "REAL_ESTATE_AGENT")
  readonly localeCode: string; // e.g. "en-CH"
  readonly executionTimezone: string; // e.g. "Europe/Zurich"
  readonly timestamp: Date;
  readonly businessOperatingSystemCode: 'REAL_ESTATE_OS';
}
