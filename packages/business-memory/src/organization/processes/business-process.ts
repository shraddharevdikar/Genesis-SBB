export interface ProcessStep {
  readonly stepSequence: number;
  readonly name: string;
  readonly description: string;
  readonly performerRoleId: string; // references OrganizationalRole
  readonly standardDurationMinutes?: number;
}

export interface BusinessProcess {
  readonly processId: string;
  readonly tenantId: string;
  readonly name: string; // e.g., "Customer Onboarding Plan", "Incident Response Playbook"
  readonly processType: 'CORE_OPERATIONAL' | 'SUPPORTING' | 'MANAGEMENT_GOVERNANCE';
  readonly processOwnerRoleId: string; // references OrganizationalRole
  readonly steps: ProcessStep[];
  readonly isOptimized: boolean;
  readonly frequencyOfExecution: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'AD_HOC';
  readonly efficiencyScore?: number; // 0 to 100
}
