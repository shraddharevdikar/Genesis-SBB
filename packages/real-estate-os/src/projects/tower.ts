import { RealEstateProjectId } from './real-estate-project.js';

export interface TowerId {
  readonly value: string;
}

export interface Tower {
  readonly towerId: TowerId;
  readonly uniqueTowerCode: string; // e.g. "TWR-A" or "BLDG-GOLD-01"
  readonly associatedProjectId: RealEstateProjectId;
  readonly displayName: string;
  readonly totalFloorsCount: number;
  readonly totalUnitsPlannedCount: number;
  readonly structuresConstructionProgressPercentage: number;
  readonly RERAApprovedFloorCountLimit: number;
  readonly structureHeightInMetersDecimal: number;
  readonly activeFlag: boolean;
  readonly lastModifiedAt: Date;
}
