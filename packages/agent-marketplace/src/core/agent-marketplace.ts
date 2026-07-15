import { MarketplaceContext } from './marketplace-context.js';
import { MarketplaceSession } from './marketplace-session.js';
import { PackageId } from '../identity/package-id.js';
import { PublisherId } from '../identity/publisher-id.js';
import { MarketplacePackage } from '../packages/marketplace-package.js';
import { PackageVersion } from '../packages/package-version.js';
import { MarketplaceCatalog } from '../catalog/marketplace-catalog.js';
import { CompatibilityCheck } from '../installation/compatibility-check.js';
import { InstallationPlan } from '../installation/installation-plan.js';
import { VerificationStatus } from '../reviews/verification-status.js';

export interface AgentMarketplace {
  /**
   * Registers or publishes a new capability package or update to the Marketplace catalog.
   */
  publishPackage(
    publisherId: PublisherId,
    manifestJson: string,
    version: PackageVersion,
    context: MarketplaceContext
  ): Promise<MarketplacePackage>;

  /**
   * Queries or searches the active Marketplace catalog with filters.
   */
  searchMarketplace(
    queryText: string,
    filtersList: string[],
    context: MarketplaceContext
  ): Promise<MarketplaceCatalog>;

  /**
   * Initiates installation of an authorized package onto a tenant's environment.
   */
  installPackage(
    tenantId: string,
    packageId: PackageId,
    versionString: string,
    context: MarketplaceContext
  ): Promise<InstallationPlan>;

  /**
   * Updates an existing installed capability to a newer validated version.
   */
  updatePackage(
    tenantId: string,
    packageId: PackageId,
    targetVersionString: string,
    context: MarketplaceContext
  ): Promise<InstallationPlan>;

  /**
   * Assesses dependency resolutions, system conflicts, and compatibility criteria.
   */
  verifyCompatibility(
    tenantId: string,
    packageId: PackageId,
    proposedVersionString: string,
    context: MarketplaceContext
  ): Promise<CompatibilityCheck>;

  /**
   * Archives or decommissions a package so it can no longer be acquired.
   */
  retirePackage(
    packageId: PackageId,
    retirementReasonNotes: string,
    context: MarketplaceContext
  ): Promise<void>;

  /**
   * Retrieves security scanning and sovereign clearance status for a package version.
   */
  getVerificationStatus(
    packageId: PackageId,
    versionString: string,
    context: MarketplaceContext
  ): Promise<VerificationStatus>;

  /**
   * Establishes a search or administrative lease on the Marketplace catalog.
   */
  startMarketplaceSession(
    tenantId: string,
    context: MarketplaceContext
  ): Promise<MarketplaceSession>;
}
