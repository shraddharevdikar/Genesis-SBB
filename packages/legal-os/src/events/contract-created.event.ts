import { Contract } from '../contracts/contract.js';
import { LegalContext } from '../core/legal-context.js';

export interface ContractCreatedEvent {
  readonly eventId: string;
  readonly eventName: 'CONTRACT_CREATED';
  readonly payload: {
    readonly contract: Contract;
  };
  readonly context: LegalContext;
}
