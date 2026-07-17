import { BusinessKpi } from './business-kpi.js';

export interface DepartmentKpi {
  readonly baseKpi: BusinessKpi;
  readonly targetDepartmentIdString: string;
  readonly budgetAllocationChfAmount?: number;
}
