export interface CapabilityRequirement {
  readonly requirementId: string;
  readonly targetCapabilityId: string; // The specific framework capability required (e.g. "COGNITIVE_WRITE_ACCESS")
  readonly description: string;
  readonly minAssuranceLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'STRICT';
}
