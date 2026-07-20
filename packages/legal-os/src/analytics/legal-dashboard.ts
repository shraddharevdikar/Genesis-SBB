export interface LegalDashboardWidget {
  readonly widgetId: string;
  readonly uniqueWidgetCode: string; // e.g. "WDG-LEG-ACTIVE-LITIGATION"
  readonly titleString: string;
  readonly visualizationType: 'CHART_PIE' | 'KPI_CARD' | 'LIST_DISPUTE_GRID' | 'COMPLIANCE_RADAR';
  readonly metricIdString: string;
  readonly layoutGridPositionJSON: string;
}

export interface LegalDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-LEG-COUNCIL"
  readonly displayName: string;
  readonly viewerRoleCodeString: string; // e.g. "GENERAL_COUNSEL" or "COMPLIANCE_OFFICER"
  readonly widgetsList: LegalDashboardWidget[];
  readonly systemDefaultFlag: boolean;
  readonly lastCalculatedAt: Date;
}
