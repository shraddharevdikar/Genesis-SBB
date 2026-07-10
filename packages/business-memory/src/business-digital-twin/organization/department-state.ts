export interface DepartmentState {
  readonly departmentId: string;
  readonly code: string;
  readonly name: string;
  readonly headOfRoleId: string;
  readonly budgetAllocatedUSD: number;
  readonly budgetConsumedUSD: number;
  readonly totalFtes: number;
  readonly vacancyCount: number;
}
