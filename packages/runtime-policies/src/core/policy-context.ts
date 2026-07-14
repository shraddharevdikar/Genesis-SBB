import { PolicyId } from '../identity/policy-id.js';

export interface PolicyContext {
  readonly contextId: string;
  readonly policyId?: PolicyId; // Optional if global/multi-policy context
  readonly tenantId: string;
  readonly departmentId?: string;
  readonly teamId?: string;
  readonly userId?: string;
  readonly requestPayload: Record<string, any>;
  readonly clientIp?: string;
  readonly userRoles: string[];
  readonly timestamp: Date;
}
