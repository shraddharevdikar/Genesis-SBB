import { GraphVisibility } from './graph-visibility.js';
import { GraphClassification } from './graph-classification.js';

export interface GraphPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly visibility: GraphVisibility;
  readonly classification: GraphClassification;
  readonly isMaskingSensitiveProperties: boolean;
  readonly complianceOfficerRoleId?: string;
  readonly lastAuditedAt?: Date;
}
