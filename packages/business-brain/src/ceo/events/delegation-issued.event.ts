import { DelegationPlan } from '../delegation/delegation-plan.js';

export interface DelegationIssuedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly delegationPlan: DelegationPlan;
  readonly timestamp: Date;
}
