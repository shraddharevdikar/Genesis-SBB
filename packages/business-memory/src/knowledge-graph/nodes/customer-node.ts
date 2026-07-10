import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface CustomerNode extends GraphNode {
  readonly entityType: EntityType.CUSTOMER;
  readonly customerOrganizationId: string;
  readonly valueTier: 'ENTERPRISE' | 'MID_MARKET' | 'SMB';
  readonly currentContractValueUSD?: number;
  readonly churnRiskStatus: 'RED' | 'YELLOW' | 'GREEN';
}
