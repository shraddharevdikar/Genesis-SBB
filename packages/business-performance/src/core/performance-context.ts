import { ObjectiveId } from '../identity/objective-id.js';

export interface PerformanceContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly activeOperatorRoleId: string;
  readonly activeObjectiveId?: ObjectiveId;
  readonly timestamp: Date;
}
