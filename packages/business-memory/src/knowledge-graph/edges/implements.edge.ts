import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface ImplementsEdge extends GraphEdge {
  readonly relationshipType: RelationshipType.IMPLEMENTS;
  readonly coveragePercent?: number; // 0 to 100
  readonly implementationStandard?: string; // e.g. "ISO-27001", "SOC2"
}
