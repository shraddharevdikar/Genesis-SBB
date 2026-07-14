import { AlertSeverity } from './alert-severity.js';

export interface MonitoringAlert {
  readonly alertId: string;
  readonly tenantId: string;
  readonly targetEngineId: string;
  readonly severity: AlertSeverity;
  readonly message: string;
  readonly sourceMetricName?: string;
  readonly sourceMetricValue?: number;
  readonly triggeredAt: Date;
  readonly isAcknowledged: boolean;
  readonly acknowledgedByRoleId?: string;
  readonly acknowledgedAt?: Date;
  readonly status: 'ACTIVE' | 'ACKNOWLEDGED' | 'RESOLVED';
}
