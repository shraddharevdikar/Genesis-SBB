import { PolicyId } from '../identity/policy-id.js';

export interface PolicyContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly activeOperatorRoleId: string;
  readonly activePolicyId?: PolicyId;
  readonly timestamp: Date;
}
