export interface HRDashboardWidget {
  readonly widgetId: string;
  readonly uniqueWidgetCode: string; // e.g. "WDG-HR-HEADCOUNT-BY-DEP"
  readonly titleString: string;
  readonly visualizationTypeCode: 'PIE_CHART' | 'BENTO_GRID_KPI' | 'TIME_SERIES_LINE' | 'BAR_CHART_COMPLEX';
  readonly metricIdentifierCodeString: string; // References KPI codes
  readonly refreshIntervalSecondsCount: number;
}

export interface HRDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-HR-EXEC-INTELLIGENCE"
  readonly displayName: string;
  readonly targetViewerRoleCodeString: string; // e.g. "CHRO", "HR_BP"
  readonly widgetsList: HRDashboardWidget[];
  readonly isSystemDefaultFlag: boolean;
  readonly lastCalculatedAt: Date;
}
