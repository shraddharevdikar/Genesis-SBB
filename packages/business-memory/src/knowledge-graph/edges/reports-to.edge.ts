import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface ReportsToEdge extends GraphEdge {
  readonly relationshipType: RelationshipType.REPORTS_TO;
  readonly reportingType: 'SOLID_LINE' | 'DOTTED_LINE';
  readonly approvalLimitUSD?: number;
}
