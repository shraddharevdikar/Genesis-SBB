import { PackageId } from '../identity/package-id.js';

export interface CompatibilityCheck {
  readonly checkId: string;
  readonly tenantId: string;
  readonly targetPackageId: PackageId;
  readonly proposedVersion: string;
  readonly isCompatible: boolean;
  readonly detectedSystemConflictsList: string[]; // e.g. ["DUPLICATE_ROUTING_SKILL", "VERSION_MISMATCH_PLANNING_ENGINE"]
  readonly securityClearanceAdhered: boolean;
  readonly verifiedAt: Date;
}
