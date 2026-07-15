import { ConfidentialityLevelType } from './confidentiality-level.js';

export interface CommunicationPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly maxConfidentialityAllowed: ConfidentialityLevelType;
  readonly autoRedactPersonalData: boolean; // Must GDPR filter run prior to transport?
  readonly enableSessionSigning: boolean; // Immutable message hash signatures
  readonly forbiddenOutboundKeywordsList: string[];
  readonly lastModifiedAt: Date;
}
