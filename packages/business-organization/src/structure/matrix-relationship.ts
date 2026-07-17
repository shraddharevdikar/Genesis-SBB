export interface MatrixRelationship {
  readonly relationshipId: string;
  readonly participantId: string;
  readonly administrativeManagerId: string; // Solid line manager (usually functional/regional)
  readonly functionalManagerId: string;       // Dotted line manager (usually project/product)
  readonly projectCode?: string;
  readonly sharedResourcePercentageValue: number; // e.g. 50
  readonly lastReviewedAt: Date;
}
