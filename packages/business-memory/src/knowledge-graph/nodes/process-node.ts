import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface ProcessNode extends GraphNode {
  readonly entityType: EntityType.PROCESS;
  readonly processId: string;
  readonly maturityRating?: number; // 1 to 5 scale
  readonly isCustomerFacing: boolean;
  readonly primarySystemIds?: string[];
}
