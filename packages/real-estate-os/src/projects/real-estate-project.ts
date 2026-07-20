import { LandParcelId } from '../land/land-parcel.js';

export interface RealEstateProjectId {
  readonly value: string;
}

export interface RealEstateProject {
  readonly projectId: RealEstateProjectId;
  readonly uniqueProjectCode: string; // e.g. "PRJ-SBB-HEIGHTS"
  readonly displayName: string;
  readonly associatedLandParcelId: LandParcelId;
  readonly developmentType: 'RESIDENTIAL_HIGHRISE' | 'COMMERCIAL_OFFICE' | 'INTEGRATED_TOWNSHIP' | 'INDUSTRIAL_WAREHOUSE';
  readonly creatorRoleIdString: string; // role ID
  readonly approvedBudgetAmount: number;
  readonly currencyCode: string;
  readonly targetLaunchDate: Date;
  readonly plannedCompletionDate: Date;
  readonly RERARegistrationNumber?: string; // official regulatory registry index
  readonly RERACertificateDocURI?: string;
  readonly activeFlag: boolean;
  readonly lastModifiedAt: Date;
  readonly createdAt: Date;
}
