import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface FundsEdge extends GraphEdge {
  readonly relationshipType: RelationshipType.FUNDS;
  readonly fundingAmountUSD?: number;
  readonly fiscalYear: string; // e.g. "FY26"
  readonly fundingFrequency: 'ONCE' | 'QUARTERLY' | 'ANNUALLY';
}
