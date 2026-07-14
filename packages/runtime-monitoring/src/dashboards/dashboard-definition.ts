export type DashboardType = 'EXECUTIVE' | 'OPERATIONS' | 'COMPLIANCE' | 'DEPARTMENT';

export interface DashboardDefinition {
  readonly dashboardId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly category: DashboardType;
  readonly description?: string;
  readonly createdByRoleId: string;
  readonly isPinned: boolean;
  readonly refreshIntervalSeconds: number;
}
