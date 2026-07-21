export interface CampusId {
  readonly value: string;
}

export interface Campus {
  readonly campusId: CampusId;
  readonly uniqueCampusCode: string; // e.g., "CAM-ZURICH-MAIN"
  readonly displayName: string;
  readonly physicalAddressString: string;
  readonly geoLatitudeDecimal?: number;
  readonly geoLongitudeDecimal?: number;
  readonly totalBuildingsCount: number;
  readonly primarySecurityContactPhone: string;
  readonly associatedRealEstateFacilityIdString?: string; // Links to RealEstateOS / Facility
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
