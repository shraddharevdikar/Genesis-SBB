import { HealthStatusType } from './agent-health.js';

export interface DepartmentHealth {
  readonly departmentId: string;
  readonly tenantId: string;
  readonly departmentName: string;
  readonly overallStatus: HealthStatusType;
  readonly totalRegisteredAgentsCount: number;
  readonly activeHealthyAgentsCount: number;
  readonly degradedAgentsCount: number;
  readonly deadAgentsCount: number;
  readonly averageHeartbeatLatencyMs: number;
  readonly computedAt: Date;
}
