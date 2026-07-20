export interface RealEstateWidget {
  readonly widgetId: string;
  readonly uniqueWidgetCode: string; // e.g. "WDG-RE-INVENTORY-STATUS"
  readonly titleString: string;
  readonly visualizationType: 'CHART_RE-FUNNEL' | 'KPI_CARD' | 'TREEMAP_UNITS' | 'TIMELINE_CONSTRUCTION_STAGES' | 'ALERT_NOTIFIER';
  readonly metricIdString: string;
  readonly layoutGridPositionJSON: string;
}

export interface RealEstateDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-RE-PROJECT-DIRECTOR"
  readonly displayName: string;
  readonly viewerRoleCodeString: string; // e.g. "PROJECT_DIRECTOR" or "CEO"
  readonly widgetsList: RealEstateWidget[];
  readonly systemDefaultFlag: boolean;
  readonly lastCalculatedAt: Date;
}
