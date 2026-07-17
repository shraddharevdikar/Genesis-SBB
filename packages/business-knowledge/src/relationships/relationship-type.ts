export type RelationshipTypeCode =
  | 'PARENT_OF'          // Hierarchy
  | 'CHILD_OF'           // Hierarchy
  | 'DEPENDS_ON'         // Requirement / Sequencing
  | 'ASSOCIATED_WITH'    // Simple correlation
  | 'OWNED_BY'           // Ownership attribution
  | 'SIMILAR_TO'         // Equivalence
  | 'CAUSES_AND_EFFECTS';// Causality

export interface RelationshipType {
  readonly typeCode: RelationshipTypeCode;
  readonly inverseTypeCode: RelationshipTypeCode;
  readonly isTransitive: boolean;
}
