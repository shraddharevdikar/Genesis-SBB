export interface ConflictOfInterestRule {
  readonly ruleId: string;
  readonly uniqueRuleCode: string; // e.g. "COI-LEGAL-01"
  readonly scopeUnitId: string; // e.g. businessUnitId or holdingCompanyId
  readonly descriptionText: string;
  readonly bannedRoleRelationshipPairsList: string[][]; // e.g. [["CFO", "COMPLIANCE_OFFICER"]]
  readonly requiresDisclosuresLog: boolean;
}
