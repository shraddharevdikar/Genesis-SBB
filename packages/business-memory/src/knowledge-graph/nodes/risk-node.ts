import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface RiskNode extends GraphNode {
  readonly entityType: EntityType.RISK;
  readonly riskId: string;
  readonly severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly probability: 'HIGH' | 'MEDIUM' | 'LOW';
  readonly mitigationPlan: string;
  readonly status: 'ACTIVE' | 'MONITORED' | 'MITIGATED' | 'REALIZED';
}
