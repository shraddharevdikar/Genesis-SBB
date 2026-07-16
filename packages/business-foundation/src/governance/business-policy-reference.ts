export interface BusinessPolicyReference {
  readonly policyId: string;
  readonly uniqueReferenceCode: string; // e.g. "SBB-CH-FIN-2026-04"
  readonly policyTitleString: string;
  readonly mandatedRegulatoryAuthorityName?: string; // e.g. "BAV", "FINMA"
  readonly checkRulesList: string[];
  readonly isBlockingOnInfraction: boolean;
}
