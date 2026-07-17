import { DepartmentInstanceId } from '../identity/department-instance-id.js';
import { DepartmentKpi } from './department-kpi.js';

export interface DepartmentHealth {
  readonly healthId: string;
  readonly departmentInstanceId: DepartmentInstanceId;
  readonly activeKpisList: DepartmentKpi[];
  readonly operationalVelocityScore: number; // e.g. 0.0 - 100.0
  readonly adherenceToPoliciesRatio: number; // e.g. 0.0 - 1.0
  readonly collaborativeSynergyRating: number; // e.g. 1 to 5
  readonly evaluatedAt: Date;
}
