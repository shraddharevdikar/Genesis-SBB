export interface EducationContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly actingUserRoleId: string; // e.g., "REGISTRAR", "DEAN", "INSTRUCTOR", "STUDENT", "ACADEMIC_ADVISOR"
  readonly localeCode: string; // e.g., "en-US"
  readonly executionTimezone: string; // e.g., "America/New_York"
  readonly timestamp: Date;
  readonly businessOperatingSystemCode: 'EDUCATION_OS';
  readonly channelSource: 'STUDENT_PORTAL' | 'FACULTY_PORTAL' | 'REGISTRAR_DESK' | 'CAMPUS_KIOSK' | 'MOBILE_APP';
  readonly isTestTransactionFlag: boolean;
}
