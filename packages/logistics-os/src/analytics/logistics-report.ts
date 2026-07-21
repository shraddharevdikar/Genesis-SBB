import { LogisticsKPIs } from './logistics-kpis.js';

export type LogisticsReportTypeCode = 'SUPPLIER_PERFORMANCE_SCORECARD' | 'WAREHOUSE_VELOCITY_AUDIT' | 'FLEET_FUEL_ECO_METRICS' | 'REVERSE_LOGISTICS_DISPOSITION_SUMMARY';

export interface LogisticsReportRow {
  readonly labelText: string;
  readonly categoryCodeText?: string;
  readonly quantityCount?: number;
  readonly monetaryValueAmount?: number;
  readonly performanceRatioDecimal?: number;
}

export interface LogisticsReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g. "REP-LOG-2026-Q3-ZUR"
  readonly reportType: LogisticsReportTypeCode;
  readonly scopeWarehouseIdString?: string; // If filtered to specific warehouse
  readonly generatedByStaffRoleIdString: string; // Links to ExecutiveOS/HROS
  readonly generatedAtTimestamp: Date;
  readonly metricsRowsList: LogisticsReportRow[];
  readonly coreKpiSnapshot?: LogisticsKPIs;
  readonly advisorySummaryNotesText?: string; // High-level operational recommendations
}
