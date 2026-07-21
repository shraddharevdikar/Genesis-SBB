export interface HospitalityContext {
  readonly tenantId: string;
  readonly hospitalityGroupId: string; // Parent brand / hotel group ID
  readonly propertyId: string; // Specific hotel, resort, or restaurant property
  readonly correlationId: string;
  readonly operatorId?: string; // Staff member triggering the operation
  readonly initiatedAt: Date;
  readonly languagePreference?: string; // For customized guest interactions
}
