import { DashboardWidget } from '../widgets/dashboard-widget.js';

export interface DashboardSection {
  readonly sectionId: string;
  readonly uniqueSectionCode: string; // e.g. "SEC-FIN-PERF-SUMMARY"
  readonly displayTitle: string;
  readonly displaySubtitle?: string;
  readonly widgetItemsList: DashboardWidget[];
  readonly layoutGridSpanColumnsCount: number; // e.g. 12-column system, spans 12, 6, etc.
  readonly sortingOrderIndex: number;
}
