import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface TeamNode extends GraphNode {
  readonly entityType: EntityType.TEAM;
  readonly teamId: string;
  readonly isAgileSquad: boolean;
  readonly focusArea: string;
  readonly productOwnerRoleId?: string;
  readonly scrumMasterRoleId?: string;
}
