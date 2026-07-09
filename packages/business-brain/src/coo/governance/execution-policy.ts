import { OperationalAuthority } from './operational-authority.js';

export interface ExecutionPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly minimumResourceBufferPercent: number; // e.g. 10
  readonly maxAllowedSlaBreachCountBeforeAlert: number;
  readonly authorities: OperationalAuthority[];
  readonly escalationRules: string[];
  readonly isActive: boolean;
}
