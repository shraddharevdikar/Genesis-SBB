export interface OperationalCapability {
  readonly capabilityId: string;
  readonly name: string; // e.g., "Engineering throughput", "Customer Support Response"
  readonly maturityLevel: 'INITIAL' | 'MANAGED' | 'DEFINED' | 'QUANTITATIVE' | 'OPTIMIZING';
  readonly owners: string[];
  readonly remarks: string;
}
