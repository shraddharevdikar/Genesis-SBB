import { RegulatoryPolicy } from './regulatory-policy.js';
import { AuditRequirement } from './audit-requirement.js';

export interface ComplianceFramework {
  readonly frameworkId: string;
  readonly tenantId: string;
  readonly displayName: string; // e.g. "SBB Swiss Federal Railways Railway Safety & Security Standards v2"
  readonly regulatoryPoliciesList: RegulatoryPolicy[];
  readonly auditRequirementsList: AuditRequirement[];
  readonly isComplianceEnforced: boolean;
  readonly lastAuditDate: Date;
}
