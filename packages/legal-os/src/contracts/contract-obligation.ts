import { ContractId } from './contract.js';

export interface ContractObligation {
  readonly obligationId: string;
  readonly uniqueObligationCode: string; // e.g. "OBL-NDA-IP-RETAIN"
  readonly associatedContractId: ContractId;
  readonly responsiblePartyIdString: string;
  readonly summaryDescription: string;
  readonly isFinancialFlag: boolean;
  readonly penaltyDescriptionText?: string;
  readonly deadlineDate?: Date;
  readonly fulfilledFlag: boolean;
  readonly fulfilledAt?: Date;
  readonly validatedByRoleIdString?: string;
}
