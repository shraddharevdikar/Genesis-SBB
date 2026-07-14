export type WidgetType = 'LINE_CHART' | 'BAR_CHART' | 'PIE_CHART' | 'GAUGE' | 'DATAGRID' | 'KPI_VALUE';

export interface DashboardWidget {
  readonly widgetId: string;
  readonly dashboardId: string;
  readonly title: string;
  readonly type: WidgetType;
  readonly targetMetricName: string; // e.g. "SBB.ApprovalEngine.averageDecisionTimeMs"
  readonly gridPosition: {
    readonly x: number;
    readonly y: number;
    readonly w: number;
    readonly h: number;
  };
  readonly visualizationOptions?: Record<string, any>;
}
