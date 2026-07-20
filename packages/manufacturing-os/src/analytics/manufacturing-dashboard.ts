export interface ManufacturingWidget {
  readonly widgetId: string;
  readonly uniqueWidgetCode: string; // e.g. "WDG-MFG-OEE-KPI"
  readonly titleString: string;
  readonly visualizationType: 'BAR_LINE_THROUGHPUT' | 'KPI_CARD' | 'TREEMAP_INVENTORY' | 'ALERT_NOTIFIER' | 'GAUGE_OEE';
  readonly metricIdString: string;
  readonly layoutGridPositionJSON: string;
}

export interface ManufacturingDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-MFG-PLANT-DIRECTOR"
  readonly displayName: string;
  readonly viewerRoleCodeString: string; // e.g. "PLANT_MANAGER" or "VP_OPERATIONS"
  readonly widgetsList: ManufacturingWidget[];
  readonly systemDefaultFlag: boolean;
  readonly lastCalculatedAt: Date;
}
