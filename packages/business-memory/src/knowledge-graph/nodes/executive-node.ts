import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface ExecutiveNode extends GraphNode {
  readonly entityType: EntityType.EXECUTIVE;
  readonly roleId: string; // references internal SBB organizational executive role ID
  readonly title: string; // e.g. "CEO", "VP of Sales"
  readonly email: string;
  readonly directReportsCount: number;
}
