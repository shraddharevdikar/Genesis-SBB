export interface CapabilityIndex {
  readonly capabilityId: string;
  readonly name: string;
  readonly description: string;
  readonly associatedAgentIds: string[]; // List of active agents possessing this capability
  readonly lastIndexedAt: Date;
}
