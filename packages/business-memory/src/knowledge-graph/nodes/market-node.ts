import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface MarketNode extends GraphNode {
  readonly entityType: EntityType.MARKET;
  readonly regionCode: string; // e.g. "EMEA", "APAC", "AMER"
  readonly geographicalScope: string[]; // countries, states, regions
  readonly targetDemographics?: string[];
  readonly marketSharePercent?: number;
}
