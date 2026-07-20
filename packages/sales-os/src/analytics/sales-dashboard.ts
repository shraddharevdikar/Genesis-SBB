export interface DashboardWidgetPositionGrid {
  readonly columnStart: number;
  readonly columnSpan: number;
  readonly rowStart: number;
  readonly rowSpan: number;
}

export type SalesWidgetTypeCode =
  | 'KPI_METRIC_VALUE_CARD'
  | 'PIPELINE_FUNNEL_BAR_CHART'
  | 'FORECAST_COMMIT_VS_AI_LINE'
  | 'TERRITORY_PERFORMANCE_MAP'
  | 'DEAL_VELOCITY_SCATTER';

export interface SalesDashboardWidget {
  readonly widgetId: string;
  readonly displayName: string;
  readonly widgetType: SalesWidgetTypeCode;
  readonly position: DashboardWidgetPositionGrid;
  readonly configuredKpiMetricCodesList: string[]; // e.g. ["KPI-SALES-ARR", "KPI-SALES-WIN-RATE"]
}

export interface SalesDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g., "DSH-SALES-GLOBAL"
  readonly displayName: string;
  readonly descriptionNotesText: string;
  readonly widgetsList: SalesDashboardWidget[];
  readonly lastRefreshedAt: Date;
  readonly creatorOperatorRoleId: string;
}
