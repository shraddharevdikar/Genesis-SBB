export type ResourceTypeCode =
  | 'HUMAN_OPERATOR'
  | 'COMPUTATIONAL_ENGINE'
  | 'PHYSICAL_ASSET_DEVICE'
  | 'FACILITY_REAL_ESTATE'
  | 'VEHICLE_LOGISTICS';

export interface OperationsResource {
  readonly resourceId: string;
  readonly uniqueResourceCode: string; // e.g. "RSC-SWE-04" or "RSC-CLUSTER-01"
  readonly resourceType: ResourceTypeCode;
  readonly displayName: string;
  readonly associatedDepartmentIdString?: string;
  readonly capabilityTagsList: string[]; // e.g. ["DOCKER", "AWS", "FIBER"]
  readonly costPerHourAmount: number;
  readonly currencyCode: string;
  readonly activeFlag: boolean;
}
