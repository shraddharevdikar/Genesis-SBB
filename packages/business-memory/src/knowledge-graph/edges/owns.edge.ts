import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface OwnsEdge extends GraphEdge {
  readonly relationshipType: RelationshipType.OWNS;
  readonly ownershipPercent?: number; // 0 to 100
  readonly isPrimaryOwner: boolean;
}
