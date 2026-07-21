export interface RetailWidget {
  readonly widgetId: string;
  readonly uniqueWidgetCode: string; // e.g. "WDG-RTL-GMV-KPI"
  readonly titleString: string;
  readonly visualizationType: 'BAR_LINE_SALES' | 'KPI_CARD' | 'TREEMAP_PRODUCT_CATEGORIES' | 'MAP_CUSTOMER_DENSITY' | 'ALERT_NOTIFIER';
  readonly metricIdString: string;
  readonly layoutGridPositionJSON: string;
}

export interface RetailDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-RTL-CHIEF-COMMERCIAL"
  readonly displayName: string;
  readonly viewerRoleCodeString: string; // e.g. "CHIEF_COMMERCIAL_OFFICER" or "MERCHANDISER"
  readonly widgetsList: RetailWidget[];
  readonly systemDefaultFlag: boolean;
  readonly lastCalculatedAt: Date;
}
