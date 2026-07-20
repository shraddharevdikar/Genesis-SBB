export interface ManufacturingContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly actingUserRoleId: string; // Links to Role module (e.g. "PLANT_MANAGER", "QUALITY_INSPECTOR", "MAINTENANCE_LEAD")
  readonly localeCode: string; // e.g. "en-US"
  readonly executionTimezone: string; // e.g. "Europe/Zurich"
  readonly timestamp: Date;
  readonly businessOperatingSystemCode: 'MANUFACTURING_OS';
  readonly isEmergencyOverrideActive: boolean; // Flag to support instant industrial emergency shut-down/safety protocols
}
