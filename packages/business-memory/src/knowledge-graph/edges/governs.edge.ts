import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface GovernsEdge extends GraphEdge {
  readonly relationshipType: RelationshipType.GOVERNS;
  readonly complianceMandatory: boolean;
  readonly penaltyForNonCompliance?: string;
}
