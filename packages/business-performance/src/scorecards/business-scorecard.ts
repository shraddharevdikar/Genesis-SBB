import { Objective } from '../objectives/objective.js';
import { BusinessKpi } from '../kpis/business-kpi.js';

export interface BusinessScorecard {
  readonly scorecardId: string;
  readonly uniqueScorecardCode: string; // e.g. "SC-FIN-2026"
  readonly title: string;
  readonly measuredYear: number;
  readonly registeredObjectivesList: Objective[];
  readonly linkedKpisList: BusinessKpi[];
  readonly lastAggregatedAt: Date;
}
