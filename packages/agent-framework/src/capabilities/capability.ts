export interface Capability {
  readonly capabilityId: string;
  readonly name: string; // e.g. "FILE_PARSING", "COMPLIANCE_AUDITING", "NOTIFICATION_DISPATCH"
  readonly description: string;
  readonly requiredSkillIds: string[];
  readonly isRestricted: boolean;
}
