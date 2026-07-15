import { PackageId } from '../identity/package-id.js';

export interface InstallationPlan {
  readonly planId: string;
  readonly tenantId: string;
  readonly targetPackageId: PackageId;
  readonly targetVersion: string;
  readonly orderedInstallationStepsList: string[]; // Resolution order
  readonly dependencyIdsToInstallList: PackageId[];
  readonly upgradeRequiredPackageIdsList: PackageId[];
  readonly rollbackScriptStepsList: string[];
}
