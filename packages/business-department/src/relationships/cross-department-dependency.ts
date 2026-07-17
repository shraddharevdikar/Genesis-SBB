import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface CrossDepartmentDependency {
  readonly dependencyId: string;
  readonly dependentDepartmentId: DepartmentInstanceId;
  readonly providerDepartmentId: DepartmentInstanceId;
  readonly requiredCapabilityCode: string;
  readonly isCriticalPathDependency: boolean;
  readonly mitigationActionPlanNotes?: string;
}
