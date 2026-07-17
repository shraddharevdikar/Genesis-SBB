import { MaturityModel } from '@sbb/business-foundation';

export interface DepartmentMaturity {
  readonly maturityId: string;
  readonly baseModelRef: MaturityModel;
  readonly activeUpskillProgramsList: string[];
  readonly targetOptimizationTimelineQuartersCount: number;
}
