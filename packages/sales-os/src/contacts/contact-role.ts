export type BuyingCommitteeRoleCode =
  | 'ECONOMIC_BUYER'
  | 'CHAMPION'
  | 'TECHNICAL_DECISION_MAKER'
  | 'INFLUENCER'
  | 'GATEKEEPER'
  | 'LEGAL_COMPLIANCE_REVIEWER'
  | 'END_USER';

export interface ContactRole {
  readonly roleId: string;
  readonly uniqueRoleCode: string; // e.g., "ROL-TECH-DECISION"
  readonly committeeRole: BuyingCommitteeRoleCode;
  readonly influenceWeightRatioNumeric: number; // e.g. 0 to 1.0 (0.9 for economic buyer, 0.2 for end user)
  readonly isPrimaryPointOfContactFlag: boolean;
  readonly internalSentimentCode: 'SUPPORTIVE_CHAMPION' | 'NEUTRAL' | 'DETRACTOR_HOSTILE';
}
