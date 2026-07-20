import { MarketingContext } from '../core/marketing-context.js';

export interface WidgetPositionGrid {
  readonly columnStart: number;
  readonly columnSpan: number;
  readonly rowStart: number;
  readonly rowSpan: number;
}

export interface MarketingDashboardWidget {
  readonly widgetId: string;
  readonly displayName: string;
  readonly widgetComponentTypeCode: 'KPI_VALUE_CARD' | 'ATTRIBUTION_PIE' | 'ACQUISITION_FUNNEL_BAR' | 'SPEND_VS_REVENUE_LINE';
  readonly position: WidgetPositionGrid;
  readonly configuredKpiMetricCodesList: string[]; // e.g. ["KPI-MKTG-CPA", "KPI-MKTG-ROAS"]
}

export interface MarketingDashboard {
  readonly dashboardId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-CMO-OVERVIEW"
  readonly displayName: string;
  readonly descriptionNotesText: string;
  readonly widgetsList: MarketingDashboardWidget[];
  readonly lastRefreshedAt: Date;
  readonly creatorOperatorRoleId: string;
}
