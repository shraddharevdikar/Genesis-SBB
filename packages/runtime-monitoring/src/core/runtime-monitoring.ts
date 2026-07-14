import { MonitoringId } from '../identity/monitoring-id.js';
import { HealthCheckId } from '../identity/health-check-id.js';
import { MonitoringContext } from './monitoring-context.js';
import { MonitoringState, SystemHealthState } from './monitoring-state.js';
import { MonitoringSession } from './monitoring-session.js';
import { RuntimeHealth } from '../health/runtime-health.js';
import { SlaStatus } from '../sla/sla-status.js';
import { MonitoringAlert } from '../alerts/monitoring-alert.js';

export interface RuntimeMonitoring {
  /**
   * Spawns or references an active business monitoring tracking session.
   */
  monitorRuntime(
    tenantId: string,
    context: Omit<MonitoringContext, 'monitoringId' | 'createdAt'>
  ): Promise<MonitoringSession>;

  /**
   * Assesses the complete organizational system and engine component health states.
   */
  evaluateHealth(
    tenantId: string,
    checkId: HealthCheckId,
    engineFilters?: string[]
  ): Promise<RuntimeHealth>;

  /**
   * Assesses operational tracking of active business SLAs.
   */
  evaluateSLA(
    tenantId: string,
    slaDefinitionId: string
  ): Promise<SlaStatus>;

  /**
   * Analyzes gathered samples to detect statistical trends and execution anomalies.
   */
  detectAnomalies(
    tenantId: string,
    metricName: string,
    lookbackDurationSeconds: number
  ): Promise<{
    readonly isAnomalous: boolean;
    readonly confidenceScore: number; // 0.0 - 1.0 scale
    readonly detectedPattern?: string;
    readonly deviationPercentage?: number;
  }>;

  /**
   * Manually elevates or raises an active critical tracking signal.
   */
  raiseAlert(
    tenantId: string,
    alert: Omit<MonitoringAlert, 'alertId' | 'triggeredAt' | 'isAcknowledged'>
  ): Promise<MonitoringAlert>;

  /**
   * Publishes critical observability domain state notifications onto SBB fabric.
   */
  publishMonitoringEvent(
    tenantId: string,
    monitoringId: MonitoringId,
    eventType: 'HEALTH_DEGRADED' | 'SLA_VIOLATED' | 'ALERT_TRIGGERED' | 'MONITORING_STARTED',
    eventPayload: Record<string, any>
  ): Promise<void>;
}
