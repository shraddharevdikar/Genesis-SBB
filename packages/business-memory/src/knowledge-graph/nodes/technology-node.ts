import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface TechnologyNode extends GraphNode {
  readonly entityType: EntityType.TECHNOLOGY;
  readonly techStackCategory: 'FRONTEND' | 'BACKEND' | 'DATABASE' | 'INFRASTRUCTURE' | 'AI_ML' | 'SECURITY';
  readonly versionSupported: string;
  readonly isStrategicStandard: boolean;
  readonly endOfLifeDate?: Date;
}
