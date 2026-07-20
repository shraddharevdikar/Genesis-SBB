export interface HealthcareWidget {
  readonly widgetId: string;
  readonly uniqueWidgetCode: string; // e.g. "WDG-HC-BED-OCCUPANCY"
  readonly titleString: string;
  readonly visualizationType: 'BAR_DEPARTMENT_LOAD' | 'KPI_CARD' | 'TREEMAP_WARDS' | 'ALERT_NOTIFIER' | 'LINE_WAIT_TIME_SERIES';
  readonly metricIdString: string;
  readonly layoutGridPositionJSON: string;
}

export interface HealthcareDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-HC-CLINICAL-DIRECTOR"
  readonly displayName: string;
  readonly viewerRoleCodeString: string; // e.g. "CHIEF_MEDICAL_OFFICER" or "HOSPITAL_COO"
  readonly widgetsList: HealthcareWidget[];
  readonly systemDefaultFlag: boolean;
  readonly lastCalculatedAt: Date;
}
