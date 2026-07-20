export interface HealthcareContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly actingUserRoleId: string; // Links to Role module (e.g., "PHYSICIAN", "CHIEF_MEDICAL_OFFICER", "WARD_MANAGER")
  readonly localeCode: string; // e.g. "en-US"
  readonly executionTimezone: string; // e.g. "America/New_York"
  readonly timestamp: Date;
  readonly businessOperatingSystemCode: 'HEALTHCARE_OS';
  readonly isEmergencyOverrideActive: boolean; // Flag to support instant access control overrides under emergency (break-the-glass protocols)
}
