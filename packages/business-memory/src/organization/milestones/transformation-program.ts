import { OrganizationalMilestone } from './organizational-milestone.js';

export interface TransformationProgram {
  readonly programId: string;
  readonly tenantId: string;
  readonly name: string; // e.g., "Agile Transition", "Cloud Transformation Plan"
  readonly purposeStatement: string;
  readonly milestones: OrganizationalMilestone[];
  readonly totalAllocatedBudgetUSD: number;
  readonly sponsorRoleId: string; // references OrganizationalRole
  readonly overallProgressPercent: number;
  readonly currentRiskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}
