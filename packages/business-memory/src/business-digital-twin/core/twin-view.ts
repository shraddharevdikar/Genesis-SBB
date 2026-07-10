import { TwinState } from './twin-state.js';

export type TwinViewPerspective = 'FINANCIAL' | 'OPERATIONAL' | 'CUSTOMER' | 'EXECUTIVE' | 'RISK_COMPLIANCE';

export interface TwinView {
  readonly viewId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly perspective: TwinViewPerspective;
  readonly filteredState: Partial<TwinState>;
  readonly lastAccessedAt: Date;
  readonly isPublicWithinTenant: boolean;
}
