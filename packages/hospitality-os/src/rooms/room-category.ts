export type HospitalityRoomClass =
  | 'STANDARD_QUEEN'
  | 'DELUXE_KING'
  | 'EXECUTIVE_SUITE'
  | 'PRESIDENTIAL_PENTHOUSE'
  | 'FAMILY_CONNECTING'
  | 'ACCESSIBLE_COMPLIANT';

export interface RoomCategory {
  readonly roomCategoryId: string;
  readonly uniqueCategoryCode: string; // e.g. "RC-EXE-SUITE"
  readonly categoryDisplayName: string;
  readonly roomClass: HospitalityRoomClass;
  readonly typicalAreaSquareMetersCount: number;
  readonly baselineRackRateAmount: number; // Anchor price before occupancy-based dynamic adjustment
  readonly inventoryUnitsTotalCount: number;
  readonly smokeFreeRequirementFlag: boolean;
  readonly highFloorPrecedenceFlag: boolean;
  readonly categoryDescriptionText: string;
  readonly lastModifiedAt: Date;
}
