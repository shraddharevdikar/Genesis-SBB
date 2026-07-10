import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface AssetNode extends GraphNode {
  readonly entityType: EntityType.ASSET;
  readonly assetId: string;
  readonly assetType: 'INTELLECTUAL_PROPERTY' | 'DATASET' | 'HARDWARE' | 'SOFTWARE_LICENSE' | 'FACILITY';
  readonly valuationUSD?: number;
  readonly isCriticalAsset: boolean;
}
