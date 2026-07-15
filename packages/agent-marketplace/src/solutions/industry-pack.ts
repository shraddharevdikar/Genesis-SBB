import { PackageId } from '../identity/package-id.js';

export interface IndustryPack {
  readonly packId: string;
  readonly verticalName: string; // e.g. "Public Transit", "Heavy Rail Freight"
  readonly compliantRegulatoryCodesList: string[]; // e.g. ["EU-RAIL-2026", "CH-BAV-SECURITY"]
  readonly digitalEmployeePackageIdsList: PackageId[];
}
