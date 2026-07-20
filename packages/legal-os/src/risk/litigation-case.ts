import { LitigationCaseState } from '../core/legal-lifecycle.js';

export interface LitigationCase {
  readonly caseId: string;
  readonly uniqueCaseCode: string; // e.g. "LIT-2026-CH-0042"
  readonly courtNameString: string; // e.g. "Commercial Court Zurich"
  readonly docketNumberString: string; // official case index
  readonly opposingPartyName: string;
  readonly plaintiffFlag: boolean; // true if company is plaintiff, false if defendant
  readonly claimDescriptionText: string;
  readonly financialClaimAmount: number;
  readonly currencyCode: string;
  readonly internalLeadCounselRoleIdString: string;
  readonly externalLawFirmNameString?: string;
  readonly currentState: LitigationCaseState;
  readonly potentialLossProbabilityRatio: number; // e.g. 0.35
  readonly nextHearingDate?: Date;
  readonly settledAt?: Date;
  readonly createdAt: Date;
}
