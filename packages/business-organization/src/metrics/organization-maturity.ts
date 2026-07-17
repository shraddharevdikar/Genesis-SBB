import { MaturityModel } from '@sbb/business-foundation';

export interface OrganizationMaturity {
  readonly maturityId: string;
  readonly baseModelRef: MaturityModel;
  readonly targetedSynergiesList: string[];
  readonly structureOptimizedTimelineMonthsValue: number;
}
