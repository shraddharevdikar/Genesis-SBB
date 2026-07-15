import { MonitoringContext } from './monitoring-context.js';
import { MonitoringSession } from './monitoring-session.js';
import { AgentHealth } from '../health/agent-health.js';
import { ExecutionObservation } from '../operations/execution-observation.js';
import { BusinessMetrics } from '../metrics/business-metrics.js';
import { TrustObservation } from '../governance/trust-observation.js';
import { EscalationNotification } from '../alerts/escalation-notification.js';
import { ExecutiveDashboard } from '../dashboards/executive-dashboard.js';

export interface AgentMonitoring {
  /**
   * Observes and registers active heartbeat statuses across single agents, departments, or entire enterprises.
   */
  observeHealth(
    targetFleetTag: string,
    context: MonitoringContext
  ): Promise<AgentHealth[]>;

  /**
   * Tracks and captures operational details of plan steps, tasks, or collaborations.
   */
  monitorExecution(
    sessionId: string,
    context: MonitoringContext
  ): Promise<ExecutionObservation[]>;

  /**
   * Evaluates strategic results, financial performance, and continuous improvement metrics.
   */
  evaluateBusinessKPIs(
    tenantId: string,
    context: MonitoringContext
  ): Promise<BusinessMetrics>;

  /**
   * Evaluates regulatory conformity, safety standards, and shifts in digital employee trust indicators.
   */
  detectRisk(
    tenantId: string,
    context: MonitoringContext
  ): Promise<TrustObservation[]>;

  /**
   * Formulates notifications, checks boundaries, and raises alerts when rule thresholds are breached.
   */
  generateAlerts(
    tenantId: string,
    context: MonitoringContext
  ): Promise<EscalationNotification[]>;

  /**
   * Compiles and outputs analytical views for leadership, departments, or technical platform operators.
   */
  publishDashboard(
    dashboardType: 'EXECUTIVE' | 'DEPARTMENT' | 'OPERATIONAL',
    context: MonitoringContext
  ): Promise<ExecutiveDashboard>;

  /**
   * Initiates a leasing track for real-time observation over designated departments or agent fleets.
   */
  startMonitoringSession(
    tenantId: string,
    targetFleetsList: string[],
    context: MonitoringContext
  ): Promise<MonitoringSession>;
}
