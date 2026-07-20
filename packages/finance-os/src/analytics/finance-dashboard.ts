export interface FinanceDashboardWidget {
  readonly widgetId: string;
  readonly uniqueWidgetCode: string; // e.g. "WID-LIQUIDITY-TREND"
  readonly displayName: string;
  readonly renderTypeCode: 'CASH_BURNOUT_CHART' | 'BUDGET_VS_ACTUAL_BAR' | 'AGING_RECEIVABLES_DONUT' | 'KPI_CARD';
  readonly layoutCoordinatesJSON: string; // Dashboard positions (grid layout representation)
  readonly refreshIntervalSecondsCount: number;
}

export interface FinanceDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g., "DSH-FIN-CFO-MAIN"
  readonly displayName: string;
  readonly viewDescriptionText: string;
  readonly widgetsList: FinanceDashboardWidget[];
  readonly targetRoleIdString: string; // Who has access to this view
  readonly lastRenderedAt: Date;
}
