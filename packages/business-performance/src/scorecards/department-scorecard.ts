import { BusinessScorecard } from './business-scorecard.js';

export interface DepartmentScorecard {
  readonly baseScorecard: BusinessScorecard;
  readonly targetDepartmentIdString: string;
  readonly operatingOverheadSlaBreachesCount: number;
}
