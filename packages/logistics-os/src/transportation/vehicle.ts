export type FleetVehicleTypeCode = 'SEMI_TRUCK' | 'BOX_TRUCK' | 'CARGO_VAN' | 'ELECTRIC_CARRIER_LAST_MILE' | 'CONTAINER_VESSEL_OCEAN' | 'CARGO_AIRCRAFT';

export interface VehicleCapacityDetails {
  readonly maxPayloadWeightKgDecimal: number;
  readonly maxPayloadVolumeCubicMetersDecimal: number;
  readonly palletPositionsCount: number;
  readonly refrigerationAvailableFlag: boolean; // Cold-chain compliance
}

export interface Vehicle {
  readonly vehicleId: string;
  readonly uniqueVehicleCode: string; // e.g. "VHC-TRK-102"
  readonly licensePlateString: string;
  readonly vehicleType: FleetVehicleTypeCode;
  readonly capacity: VehicleCapacityDetails;
  readonly primaryOperatorStaffRoleId?: string; // Assigned Driver (HROS)
  readonly activeStatusFlag: boolean;
  readonly fuelTypeCode: 'DIESEL' | 'ELECTRIC' | 'GASOLINE' | 'HYDROGEN';
  readonly currentGpsLatitudeDecimal?: number; // Real-time coordinates
  readonly currentGpsLongitudeDecimal?: number;
  readonly serviceStatus: 'AVAILABLE' | 'ON_ROUTE' | 'UNDER_MAINTENANCE' | 'DECOMMISSIONED';
  readonly lastModifiedAt: Date;
}
