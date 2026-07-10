import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface ProductNode extends GraphNode {
  readonly entityType: EntityType.PRODUCT;
  readonly productId: string;
  readonly productFamily: string;
  readonly licensingModel: string;
  readonly status: 'GENERAL_AVAILABILITY' | 'BETA' | 'DEPRECATED';
}
