export interface OperationsDashboardWidget {
  readonly widgetId: string;
  readonly uniqueWidgetCode: string; // e.g. "WDG-OPS-SLA-BREACH"
  readonly titleString: string;
  readonly visualizationType: 'TIME_SERIES' | 'GAUGE_KPI' | 'BENTO_METRIC_GRID' | 'FLOW_BOTTLENECK_FUNNEL';
  readonly metricIdString: string;
  readonly layoutGridPositionJSON: string;
}

export interface OperationsDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-OPS-INTELLIGENCE"
  readonly displayName: string;
  readonly viewerRoleCodeString: string; // e.g. "COO" or "OPS_MANAGER"
  readonly widgetsList: OperationsDashboardWidget[];
  readonly systemDefaultFlag: boolean;
  readonly lastCalculatedAt: Date;
}
