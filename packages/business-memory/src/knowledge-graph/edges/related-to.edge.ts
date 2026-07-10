import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface RelatedToEdge extends GraphEdge {
  readonly relationshipType: RelationshipType.RELATED_TO;
  readonly associationNature: string; // descriptive link context
}
