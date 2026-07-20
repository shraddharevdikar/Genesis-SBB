import { ContractLifecycleState } from '../core/legal-lifecycle.js';

export interface ContractId {
  readonly value: string;
}

export interface Contract {
  readonly contractId: ContractId;
  readonly uniqueContractCode: string; // e.g. "CON-NDA-2026-0041"
  readonly displayName: string;
  readonly category: 'NDA' | 'MASTER_SERVICE_AGREEMENT' | 'PARTNERSHIP' | 'VENDOR_PURCHASE' | 'EMPLOYMENT_EXECUTIVE' | 'CUSTOM';
  readonly templateIdString?: string;
  readonly creatorRoleIdString: string;
  readonly currentState: ContractLifecycleState;
  readonly totalValueAmount?: number;
  readonly currencyCode?: string;
  readonly documentStorageURI: string;
  readonly checksumHashString: string; // Integrity check
  readonly effectiveStartDate?: Date;
  readonly terminationDate?: Date;
  readonly automatedRenewalFlag: boolean;
  readonly lastModifiedAt: Date;
  readonly createdAt: Date;
}
