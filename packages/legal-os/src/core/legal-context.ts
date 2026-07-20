export interface LegalContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly activeLegalCounselRoleId: string; // Links to Role module
  readonly localeCode: string; // e.g. "en-CH"
  readonly executionTimezone: string; // e.g. "Europe/Zurich"
  readonly timestamp: Date;
  readonly businessOperatingSystemCode: 'LEGAL_OS';
}
