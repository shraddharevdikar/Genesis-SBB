import { ContractId } from './contract.js';

export interface ContractParty {
  readonly partyId: string;
  readonly uniquePartyCode: string; // e.g. "PTY-SBB-HQ" or "PTY-EXTERNAL-GOOGLE"
  readonly associatedContractId: ContractId;
  readonly legalEntityName: string;
  readonly businessRegistrationNumber?: string; // e.g. UID or CHE number
  readonly physicalAddressText: string;
  readonly isPrimaryInternalPartyFlag: boolean;
  readonly authorizedSignatoryNameString?: string;
  readonly signatureMetadataJSON?: string; // digital signature envelope tracking
  readonly hasSignedFlag: boolean;
  readonly signedAt?: Date;
}
