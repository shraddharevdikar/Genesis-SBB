import { DecisionOption } from './decision-option.js';

export interface OptionComparison {
  readonly comparisonId: string;
  readonly options: DecisionOption[];
  readonly bestPerformerByCostId?: string;
  readonly bestPerformerByTimeId?: string;
  readonly bestPerformerByAlignmentId?: string;
  readonly comparisonSummary: string;
}
