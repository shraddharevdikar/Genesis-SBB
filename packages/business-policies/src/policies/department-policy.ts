import { BusinessPolicy } from './business-policy.js';

export interface DepartmentPolicy {
  readonly basePolicy: BusinessPolicy;
  readonly targetDepartmentIdString: string;
  readonly budgetCapChfAmount?: number;
  readonly delegateAuthorityRoleIdString?: string;
}
