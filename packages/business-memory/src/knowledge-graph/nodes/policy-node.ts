import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface PolicyNode extends GraphNode {
  readonly entityType: EntityType.POLICY;
  readonly policyId: string;
  readonly regulationScope?: string; // e.g. "GDPR", "HIPAA", "SEC"
  readonly governanceLevel: 'GLOBAL' | 'REGIONAL' | 'DEPARTMENTAL';
  readonly lastAuditDate?: Date;
  readonly complianceOwnerRoleId?: string;
}
