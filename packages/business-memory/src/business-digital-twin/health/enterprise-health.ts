import { BusinessHealthIndex } from './business-health-index.js';

export interface EnterpriseHealth {
  readonly tenantId: string;
  readonly currentHealthIndex: BusinessHealthIndex;
  readonly targetHealthIndex: BusinessHealthIndex;
  readonly assessedAt: Date;
  readonly healthTrend: 'IMPROVING' | 'STABLE' | 'DECLINING';
  readonly keyObservations: string[];
}
