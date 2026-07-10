import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface MemberOfEdge extends GraphEdge {
  readonly relationshipType: RelationshipType.MEMBER_OF;
  readonly roleWithinGroup?: string; // e.g. "Lead", "Facilitator", "Contributor"
  readonly joinedAt?: Date;
}
