import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface InitiativeNode extends GraphNode {
  readonly entityType: EntityType.INITIATIVE;
  readonly initiativeId: string;
  readonly sponsorRoleId: string;
  readonly budgetUSD?: number;
  readonly targetCompletionDate?: Date;
  readonly status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'PAUSED' | 'ABANDONED';
}
