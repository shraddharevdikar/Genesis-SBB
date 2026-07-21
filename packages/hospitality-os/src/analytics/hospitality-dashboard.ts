export interface HospitalityWidget {
  readonly widgetId: string;
  readonly uniqueWidgetCode: string; // e.g. "WDG-HOS-OCCUPANCY-KPI"
  readonly titleString: string;
  readonly visualizationType:
    | 'OCCUPANCY_GAUGE'
    | 'REVPAR_LINE_CHART'
    | 'ADR_INDEX_BAR'
    | 'HOUSEKEEPING_EFFICIENCY_PIE'
    | 'GUEST_SATISFACTION_CARD'
    | 'REVENUE_BY_DEPT_TREEMAP'
    | 'ALERT_CRITICAL_ROOM_STATUS';
  readonly metricIdString: string;
  readonly layoutGridPositionJSON: string;
}

export interface HospitalityDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-HOS-PROV-ZUR"
  readonly displayName: string;
  readonly viewerRoleCodeString: string; // e.g., "GENERAL_MANAGER", "REVENUE_MANAGER", "HOUSEKEEPING_DIRECTOR"
  readonly widgetsList: HospitalityWidget[];
  readonly systemDefaultFlag: boolean;
  readonly lastCalculatedAt: Date;
}
