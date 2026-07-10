import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface DependsOnEdge extends GraphEdge {
  readonly relationshipType: RelationshipType.DEPENDS_ON;
  readonly dependencySeverity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly fallbackAvailable: boolean;
  readonly fallbackDescription?: string;
}
