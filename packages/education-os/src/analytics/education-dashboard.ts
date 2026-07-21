export interface EducationWidget {
  readonly widgetId: string;
  readonly uniqueWidgetCode: string; // e.g. "WDG-EDU-RETENTION-KPI"
  readonly titleString: string;
  readonly visualizationType: 'GPA_DISTRIBUTION_BAR' | 'KPI_CARD' | 'RETENTION_LINE' | 'FACULTY_LOAD_TREEMAP' | 'ADMISSIONS_FUNNEL_BAR' | 'ALERT_NOTIFIER';
  readonly metricIdString: string;
  readonly layoutGridPositionJSON: string;
}

export interface EducationDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-EDU-PROVOST-OFFICE"
  readonly displayName: string;
  readonly viewerRoleCodeString: string; // e.g., "PROVOST", "DEAN", "REGISTRAR"
  readonly widgetsList: EducationWidget[];
  readonly systemDefaultFlag: boolean;
  readonly lastCalculatedAt: Date;
}
