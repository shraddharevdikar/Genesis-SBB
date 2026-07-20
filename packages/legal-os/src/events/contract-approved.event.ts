import { Contract } from '../contracts/contract.js';
import { LegalContext } from '../core/legal-context.js';

export interface ContractApprovedEvent {
  readonly eventId: string;
  readonly eventName: 'CONTRACT_APPROVED';
  readonly payload: {
    readonly contract: Contract;
    readonly approvedByOperatorRoleIdString: string;
  };
  readonly context: LegalContext;
}
