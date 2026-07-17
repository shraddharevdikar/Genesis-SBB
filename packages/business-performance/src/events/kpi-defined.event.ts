import { KpiId } from '../identity/kpi-id.js';

export interface KpiDefinedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly kpiId: KpiId;
  readonly uniqueKpiCode: string;
  readonly classificationCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
