import { LandParcelId } from './land-parcel.js';

export interface LandAcquisitionTransaction {
  readonly acquisitionId: string;
  readonly uniqueAcquisitionCode: string; // e.g. "ACQ-2026-CH-04"
  readonly associatedParcelId: LandParcelId;
  readonly originalSellerName: string;
  readonly agreedPurchaseAmount: number;
  readonly escrowAmount: number;
  readonly currencyCode: string;
  readonly leadAcquisitionManagerRoleIdString: string; // e.g. "LAND_MANAGER"
  readonly dueDiligencePassedFlag: boolean;
  readonly titleClearanceDocURI: string;
  readonly executionDate?: Date;
  readonly closedAt?: Date;
}
