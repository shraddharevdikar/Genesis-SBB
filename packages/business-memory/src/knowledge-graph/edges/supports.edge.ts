import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface SupportsEdge extends GraphEdge {
  readonly relationshipType: RelationshipType.SUPPORTS;
  readonly contributionLevel?: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly alignmentScore?: number; // 0 to 100
}
