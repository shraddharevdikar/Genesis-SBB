export enum RelationshipStrengthTier {
  CRITICAL = 'CRITICAL',
  STRONG = 'STRONG',
  MODERATE = 'MODERATE',
  WEAK = 'WEAK',
  DORMANT = 'DORMANT'
}

export interface RelationshipStrength {
  readonly tier: RelationshipStrengthTier;
  readonly score: number; // 0.0 to 1.0 or 0 to 100
  readonly description?: string;
}
