import { IntellectualPropertyId } from './intellectual-property.js';

export interface Copyright {
  readonly copyrightId: string;
  readonly associatedIpAssetId: IntellectualPropertyId;
  readonly uniqueCopyrightCode: string; // e.g. "CPR-SBB-OS-CORE"
  readonly creativeWorkDescriptionText: string;
  readonly authorNamesList: string[];
  readonly creationYear: number;
  readonly publicLicenseTypeString?: string; // e.g. "MIT", "Apache-2.0", "Proprietary"
  readonly originalCodeRepositoryURI?: string;
  readonly activeFlag: boolean;
}
