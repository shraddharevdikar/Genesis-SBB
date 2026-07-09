export interface BusinessCapability {
  readonly capabilityId: string;
  readonly tenantId: string;
  readonly name: string; // e.g., "Predictive Analytics", "Cloud Orchestration"
  readonly description: string;
  readonly ownerRoleId: string; // references OrganizationalRole
  readonly maturityLevel: 'INITIAL' | 'MANAGED' | 'DEFINED' | 'QUANTITATIVELY_MANAGED' | 'OPTIMIZING';
  readonly criticalDependencies: string[]; // references of other capabilities or systems
  readonly supportingSystemNames: string[]; // e.g. ["Salesforce", "Kubernetes Cluster"]
  readonly lastAssessedAt: Date;
}
