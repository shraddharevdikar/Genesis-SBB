import { ApiContext } from '../core/api-context.js';

export interface MonitoringCapability {
  readonly capabilityId: string;
  getEnterpriseHealthIndex(
    tenantId: string,
    context: ApiContext
  ): Promise<{ readonly overallHealthScore: number; readonly activeDegradationCount: number }>;

  getOperationalAlertsSummary(
    tenantId: string,
    context: ApiContext
  ): Promise<{ readonly criticalAlertsCount: number; readonly activeWarningsCount: number }>;
}
