import { DepartmentPack } from './department-pack.js';
import { IndustryPack } from './industry-pack.js';

export interface BusinessSolution {
  readonly solutionId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly coreDepartmentPack?: DepartmentPack;
  readonly targetIndustryPack?: IndustryPack;
  readonly deploymentConfidenceScore: number;
  readonly expectedOperationalImpactScore: number; // 0-100 scale
}
