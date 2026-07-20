import { LandAcquisitionState } from '../core/property-lifecycle.js';

export interface LandParcelId {
  readonly value: string;
}

export interface LandParcel {
  readonly landParcelId: LandParcelId;
  readonly uniqueParcelCode: string; // e.g. "PRC-ZURICH-8001"
  readonly displayName: string;
  readonly physicalLocationAddress: string;
  readonly geographicalCoordinatesGPS: string; // e.g. "47.3769, 8.5417"
  readonly totalAreaSquareMetersDecimal: number;
  readonly currentState: LandAcquisitionState;
  readonly registeredOwnerNameString: string;
  readonly costBasisAmount: number;
  readonly currencyCode: string;
  readonly activeFlag: boolean;
  readonly lastModifiedAt: Date;
  readonly createdAt: Date;
}
