export interface DispatchManifestLine {
  readonly manifestLineId: string;
  readonly associatedShipmentIdString: string;
  readonly loadingSequenceIndex: number; // Order in which cargo is packed
  readonly cargoHazmatFlag: boolean;
}

export interface CargoDispatchManifest {
  readonly manifestId: string;
  readonly uniqueManifestCode: string; // e.g. "DSP-MANIFEST-2026-0422"
  readonly dispatchWarehouseIdString: string; // Links to Warehouse
  readonly dispatchManifestLinesList: DispatchManifestLine[];
  readonly vehiclePlateLicenseString: string;
  readonly driverFullNameString: string;
  readonly driverContactPhone: string;
  readonly cargoInsuredValueAmount: number;
  readonly currencyCode: string;
  readonly loggedDispatchGateAttendantStaffRoleIdString: string; // Links to HROS / Role
  readonly releasedForTransitFlag: boolean;
  readonly dispatchedAt?: Date;
  readonly lastModifiedAt: Date;
}
