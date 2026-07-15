import { PackageId } from '../identity/package-id.js';
import { PublisherId } from '../identity/publisher-id.js';
import { PackageManifest } from './package-manifest.js';
import { PackageVersion } from './package-version.js';
import { PackageLifecycleState } from '../core/marketplace-lifecycle.js';

export interface MarketplacePackage {
  readonly packageId: PackageId;
  readonly publisherId: PublisherId;
  readonly manifest: PackageManifest;
  readonly availableVersionsList: PackageVersion[];
  readonly lifecycleState: PackageLifecycleState;
  readonly totalDownloadsCount: number;
}
