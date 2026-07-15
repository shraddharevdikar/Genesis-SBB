import { MarketplaceCategoryCode } from '../catalog/category.js';

export interface PackageManifest {
  readonly schemaVersion: string;
  readonly uniquePackageName: string; // e.g., "sbb.logistics.train-scheduler"
  readonly displayTitle: string;
  readonly publisherName: string;
  readonly category: MarketplaceCategoryCode;
  readonly supportsMultiTenancy: boolean;
  readonly requiredFrameworkVersion: string;
}
