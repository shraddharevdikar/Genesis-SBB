export interface RegionPolicy {
  readonly dataResidencyRegion: string;
  readonly allowedRegions: string[];
  readonly blockCrossRegionDataTransfer: boolean;
}
