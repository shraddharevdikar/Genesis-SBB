export interface ExecutiveDashboardWidget {
  readonly widgetId: string;
  readonly uniqueWidgetCode: string; // e.g. "WDG-EXE-BALANCED-SCORECARD"
  readonly titleString: string;
  readonly visualizationType: 'CHART_RADAR' | 'KPI_CARD' | 'TREEMAP_CAPABILITIES' | 'TIMELINE_ROADMAP' | 'ALERT_NOTIFIER';
  readonly metricIdString: string;
  readonly layoutGridPositionJSON: string;
}

export interface ExecutiveDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-CEO-COMMAND"
  readonly displayName: string;
  readonly viewerRoleCodeString: string; // e.g. "CEO" or "BOARD_MEMBER"
  readonly widgetsList: ExecutiveDashboardWidget[];
  readonly systemDefaultFlag: boolean;
  readonly lastCalculatedAt: Date;
}
