import { BusinessTemplate } from './business-template.js';

export interface DashboardTemplate extends BusinessTemplate {
  readonly defaultLayoutGridJSON: string;
  readonly preferredWidgetComponentTypesList: string[]; // e.g. ["KPI_CARD", "TREND_LINE", "ANOMALY_DOT"]
  readonly maximumWidgetsCountLimit: number;
}
