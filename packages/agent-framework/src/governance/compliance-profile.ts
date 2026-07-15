export interface ComplianceProfile {
  readonly complianceId: string;
  readonly standardsToCheck: string[]; // e.g. ["FINMA", "GDPR", "SBB_INTERNAL_4EYES"]
  readonly enforceStrictRedaction: boolean; // Automasked sensitive parameters logging
  readonly requiresDoubleSignatureForDeployment: boolean;
}
