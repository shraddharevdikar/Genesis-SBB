import { PolicyId } from '../identity/policy-id.js';

export interface PolicyCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly policyId: PolicyId;
  readonly name: string;
  readonly category: 'SECURITY' | 'AUTHORIZATION' | 'EXECUTION' | 'SCHEDULING' | 'NOTIFICATION' | 'COMPLIANCE' | 'RETENTION';
  readonly createdByRoleId: string;
  readonly timestamp: Date;
}
