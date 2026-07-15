import { PackageId } from '../identity/package-id.js';

export interface InstallationProfile {
  readonly profileId: string;
  readonly tenantId: string;
  readonly packageId: PackageId;
  readonly installedVersion: string;
  readonly isFullyConfigured: boolean;
  readonly customEnvironmentOverridesJson?: string;
  readonly installedAt: Date;
  readonly lastUpdatedAt: Date;
}
